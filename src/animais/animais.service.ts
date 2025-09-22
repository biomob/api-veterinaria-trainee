import { Injectable, NotFoundException } from '@nestjs/common';
import { Animal } from './animal.model';

@Injectable()
export class AnimaisService {
  private animais: Animal[] = [];
  private idCounter = 1;

  create(animalData: Omit<Animal, 'id'>): Animal {
    const animal: Animal = { id: this.idCounter++, ...animalData };
    this.animais.push(animal);
    return animal;
  }

  findAll(especie?: string): Animal[] {
    if (especie) {
      return this.animais.filter(a => a.especie === especie);
    }
    return this.animais;
  }

  findOne(id: number): Animal {
    const animal = this.animais.find(a => a.id === id);
    if (!animal) throw new NotFoundException('Animal não encontrado');
    return animal;
  }

  update(id: number, updateData: Partial<Omit<Animal, 'id'>>): Animal {
    const animal = this.findOne(id);
    Object.assign(animal, updateData);
    return animal;
  }

  remove(id: number): void {
    const index = this.animais.findIndex(a => a.id === id);
    if (index === -1) throw new NotFoundException('Animal não encontrado');
    this.animais.splice(index, 1);
  }
}