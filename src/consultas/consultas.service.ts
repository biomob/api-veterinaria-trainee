import { Injectable, NotFoundException, BadRequestException, Inject, forwardRef } from '@nestjs/common';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { Consulta } from './entities/consulta.entity';
import { AnimaisService } from '../animais/animais.service';
import { Animais } from '../animais/entities/animais.entity';

@Injectable()
export class ConsultasService {
  private consultas: Consulta[] = [];
  private idCounter = 1;

  constructor(
    @Inject(forwardRef(() => AnimaisService))
    private readonly animaisService: AnimaisService,
  ) {}

  private dateOnlyString(d: Date) {
    return d.toISOString().split('T')[0];
  }

  create(createConsultaDto: CreateConsultaDto): Partial<Consulta> {
    const newDate = new Date(createConsultaDto.dataConsulta);
    const newDateStr = this.dateOnlyString(newDate);
    const horario = createConsultaDto.horarioConsulta;

    const conflito = this.consultas.find(
      c => this.dateOnlyString(c.dataConsulta) === newDateStr && c.horarioConsulta === horario,
    );
    if (conflito) {
      throw new BadRequestException({
        statusCode: 400,
        message: `Já existe uma consulta no dia ${newDateStr} às ${horario}`,
        errorCode: 'CONSULTA_CONFLITO',
      });
    }

    let animal: Animais | null = null;
    if (createConsultaDto.animalId) {
      animal = this.animaisService.findOne(createConsultaDto.animalId);
      if (!animal) {
        throw new NotFoundException({
          statusCode: 404,
          message: `Animal com id ${createConsultaDto.animalId} não encontrado`,
          errorCode: 'ANIMAL_NAO_ENCONTRADO',
        });
      }
    } else {
      const { nomeAnimal, especie, idade, genero, responsavel, telefoneResponsavel } = createConsultaDto;
      if (!nomeAnimal || !especie || idade === undefined || !genero || !responsavel || !telefoneResponsavel) {
        throw new BadRequestException({
          statusCode: 400,
          message:'Para criar um animal, preencha todos os campos: nomeAnimal, especie, idade, genero, responsavel, telefoneResponsavel',
          errorCode: 'ANIMAL_NAO_CADASTRADO',
        });
      }
      animal = this.animaisService.create({
        nome: nomeAnimal,
        especie,
        idade,
        genero,
        responsavel,
        telefoneResponsavel,
      });
    }

    const consulta: Consulta = {
      id: this.idCounter++,
      animal,
      dataConsulta: new Date(createConsultaDto.dataConsulta),
      horarioConsulta: createConsultaDto.horarioConsulta,
      motivoConsulta: createConsultaDto.motivoConsulta,
      valor: createConsultaDto.valor,
    };

    if (!animal.historicoConsultas) animal.historicoConsultas = [];
    animal.historicoConsultas.push(consulta);

    this.consultas.push(consulta);

    const { historicoConsultas, ...animalSemHistorico } = animal;
    return {
      ...consulta,
      animal: animalSemHistorico,
    };
  }

  findAll(): Partial<Consulta>[] {
    return this.consultas.map(c => {
      const { historicoConsultas, ...animalSemHistorico } = c.animal;
      return { ...c, animal: animalSemHistorico };
    });
  }

  findOne(id: number): Partial<Consulta> {
    const consulta = this.consultas.find(c => c.id === id);
    if (!consulta) {
      throw new NotFoundException({
        statusCode: 404,
        message: `Consulta com id ${id} não encontrada`,
        errorCode: 'CONSULTA_NAO_ENCONTRADA',
      });
    }
    const { historicoConsultas, ...animalSemHistorico } = consulta.animal;
    return { ...consulta, animal: animalSemHistorico };
  }

  update(id: number, updateConsultaDto: CreateConsultaDto): Partial<Consulta> {
    const consultaIndex = this.consultas.findIndex(c => c.id === id);
    if (consultaIndex === -1) throw new NotFoundException({
        statusCode: 404,
        message: `Consulta com id ${id} não encontrada`,
        errorCode: 'CONSULTA_NAO_ENCONTRADA',
    });
    const consulta = this.consultas[consultaIndex];

    const newDate = updateConsultaDto.dataConsulta ? new Date(updateConsultaDto.dataConsulta) : consulta.dataConsulta;
    const newDateStr = this.dateOnlyString(newDate);
    const newHorario = updateConsultaDto.horarioConsulta ?? consulta.horarioConsulta;

    const conflito = this.consultas.find(
      c => c.id !== id && this.dateOnlyString(c.dataConsulta) === newDateStr && c.horarioConsulta === newHorario,
    );
    if (conflito) {
      throw new BadRequestException({
        statusCode: 400,
        message: `Já existe uma consulta no dia ${newDateStr} às ${newHorario}`,
        errorCode: 'CONSULTA_CONFLITO',
      });
    }

    const updatedConsulta: Consulta = {
      ...consulta,
      dataConsulta: updateConsultaDto.dataConsulta ? new Date(updateConsultaDto.dataConsulta) : consulta.dataConsulta,
      horarioConsulta: updateConsultaDto.horarioConsulta ?? consulta.horarioConsulta,
      motivoConsulta: updateConsultaDto.motivoConsulta ?? consulta.motivoConsulta,
      valor: updateConsultaDto.valor ?? consulta.valor,
    };

    this.consultas[consultaIndex] = updatedConsulta;

    if (consulta.animal.historicoConsultas) {
      const histIndex = consulta.animal.historicoConsultas.findIndex(c => c.id === id);
      if (histIndex !== -1) {
        consulta.animal.historicoConsultas[histIndex] = updatedConsulta;
      }
    }

    const { historicoConsultas, ...animalSemHistorico } = updatedConsulta.animal;
    return { ...updatedConsulta, animal: animalSemHistorico };
  }

  remove(id: number): void {
    const index = this.consultas.findIndex(c => c.id === id);
    if (index === -1) throw new NotFoundException({
        statusCode: 404,
        message: `Consulta com id ${id} não encontrada`,
        errorCode: 'CONSULTA_NAO_ENCONTRADA',
    });

    const consulta = this.consultas[index];
    if (consulta.animal?.historicoConsultas) {
      consulta.animal.historicoConsultas = consulta.animal.historicoConsultas.filter(c => c.id !== id);
    }
    this.consultas.splice(index, 1);
  }

  removeByAnimalId(animalId: number): void {
    const toRemove = this.consultas.filter(c => c.animal?.id === animalId);
    for (const c of toRemove) {
      if (c.animal?.historicoConsultas) {
        c.animal.historicoConsultas = c.animal.historicoConsultas.filter(h => h.id !== c.id);
      }
    }
    this.consultas = this.consultas.filter(c => c.animal?.id !== animalId);
  }
}