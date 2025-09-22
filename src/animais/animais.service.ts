import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnimaisDto } from './dto/create-animais.dto';
import { Animais } from './entities/animais.entity';

@Injectable()
export class AnimaisService {
  private animais: Animais[] = [];
  private idCounter = 1;

  create(createAnimaisDto: CreateAnimaisDto): Animais {
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
    if (!animal) {
      throw new NotFoundException(`Animal com id ${id} não encontrado`);
    }
    return animal;
  }

  remove(id: number): void {
    this.animais = this.animais.filter(a => a.id !== id);
  }
}