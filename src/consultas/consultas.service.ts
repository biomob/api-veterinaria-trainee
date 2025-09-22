import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { Consulta } from './entities/consulta.entity';
import { AnimaisService } from '../animais/animais.service';

@Injectable()
export class ConsultasService {
  private consultas: Consulta[] = [];
  private idCounter = 1;

  constructor(private readonly animaisService: AnimaisService) {}

  create(createConsultaDto: CreateConsultaDto): Partial<Consulta> {
    let animal;

    if (createConsultaDto.animalId) {
      animal = this.animaisService.findOne(createConsultaDto.animalId);
      if (!animal) {
        throw new NotFoundException(`Animal com id ${createConsultaDto.animalId} não encontrado`);
      }
    } else {
      const { nomeAnimal, especie, idade, genero, responsavel, telefoneResponsavel } = createConsultaDto;

      if (!nomeAnimal || !especie || idade === undefined || !genero || !responsavel || !telefoneResponsavel) {
        throw new BadRequestException(
          'Para criar um animal, todos os campos obrigatórios devem ser preenchidos: nomeAnimal, especie, idade, genero, responsavel, telefoneResponsavel'
        );
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
      return {
        ...c,
        animal: animalSemHistorico,
      };
    });
  }

  findOne(id: number): Partial<Consulta> {
    const consulta = this.consultas.find(c => c.id === id);
    if (!consulta) throw new NotFoundException(`Consulta com id ${id} não encontrada`);

    const { historicoConsultas, ...animalSemHistorico } = consulta.animal;
    return {
      ...consulta,
      animal: animalSemHistorico,
    };
  }

  remove(id: number): void {
    const index = this.consultas.findIndex(c => c.id === id);
    if (index === -1) throw new NotFoundException(`Consulta com id ${id} não encontrada`);

    const consulta = this.consultas[index];

    if (consulta.animal.historicoConsultas) {
      consulta.animal.historicoConsultas = consulta.animal.historicoConsultas.filter(c => c.id !== id);
    }

    this.consultas.splice(index, 1);
  }
}