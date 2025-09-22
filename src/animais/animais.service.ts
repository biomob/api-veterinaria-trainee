import { Injectable, NotFoundException, Inject, forwardRef, BadRequestException } from '@nestjs/common';
import { CreateAnimaisDto } from './dto/create-animais.dto';
import { Animais } from './entities/animais.entity';
import { ConsultasService } from '../consultas/consultas.service';

@Injectable()
export class AnimaisService {
  private animais: Animais[] = [];
  private idCounter = 1;

  constructor(
    @Inject(forwardRef(() => ConsultasService))
    private readonly consultasService: ConsultasService,
  ) {}

  create(createAnimaisDto: CreateAnimaisDto): Animais {
    const { nome, especie, idade, genero, responsavel, telefoneResponsavel } = createAnimaisDto;

    if (!nome || !especie || idade === undefined || !genero || !responsavel || !telefoneResponsavel) {
      throw new BadRequestException({
        statusCode: 400,
        message: 'Para criar um animal, preencha todos os campos: nome, especie, idade, genero, responsavel, telefoneResponsavel',
        errorCode: 'ANIMAL_NAO_CADASTRADO',
      });
    }

    const animal: Animais = {
      id: this.idCounter++,
      ...createAnimaisDto,
      historicoConsultas: [],
    };
    this.animais.push(animal);
    return animal;
  }

  findAll(): Animais[] {
    return this.animais;
  }

  findOne(id: number): Animais {
    const animal = this.animais.find(a => a.id === id);
    if (!animal) throw new NotFoundException({
      statusCode: 404,
      message: `Animal com id ${id} não encontrado`,
      errorCode: 'ANIMAL_NAO_ENCONTRADO',
    });
    return animal;
  }

  update(id: number, updateAnimaisDto: CreateAnimaisDto) {
    const index = this.animais.findIndex(animal => animal.id === id);
    if (index === -1) throw new NotFoundException({
      statusCode: 404,
      message: `Animal com id ${id} não encontrado`,
      errorCode: 'ANIMAL_NAO_ENCONTRADO',
    });

    this.animais[index] = { ...this.animais[index], ...updateAnimaisDto };
    return this.animais[index];
  }

  remove(id: number): void {
    this.findOne(id);
    this.consultasService.removeByAnimalId(id);
    this.animais = this.animais.filter(a => a.id !== id);
  }
}