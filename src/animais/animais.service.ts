import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animai.dto';
import { UpdateAnimalDto } from './dto/update-animai.dto';
import { Animal } from './entities/animai.entity';

@Injectable()
export class AnimaisService {
  private animais: Animal[] = [];
  private Id = 1;

  create(createAnimalDto: CreateAnimalDto): Animal {
    const novoAnimal = new Animal(
      this.Id++,
      createAnimalDto.nome,
      createAnimalDto.especie,
      createAnimalDto.idade,
    );
    this.animais.push(novoAnimal);
    return novoAnimal;
  }

  
   findAll(especie?: string): Animal[] {
    if (especie) {
      return this.animais.filter(animal => 
        animal.especie.toLowerCase() === especie.toLowerCase()
      );
    }
    return this.animais;
  }

  findOne(id: number):Animal {
       const animal = this.animais.find(animal => animal.id === id);
    if (!animal) {
      throw new NotFoundException(`Animal com ID: ${id} não encontrado! Verifique as informações fornecidas`);
    }
    return animal;
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto):Animal {
  const animalIndex = this.animais.findIndex(animal => animal.id === id);
    
    if (animalIndex === -1) {
      throw new NotFoundException(`Animal com ID ${id} não encontrado! Verifique as informações fornecidas`);
    }
      const animal = this.animais[animalIndex];
    
    if (updateAnimalDto.nome !== undefined) {
      animal.nome = updateAnimalDto.nome;
    }
    if (updateAnimalDto.especie !== undefined) {
      animal.especie = updateAnimalDto.especie;
    }
    if (updateAnimalDto.idade !== undefined) {
      animal.idade = updateAnimalDto.idade;
    }

    this.animais[animalIndex] = animal;
    return animal;
  }

  remove(id: number): void {
    const animalIndex = this.animais.findIndex(animal => animal.id === id);
    
    if (animalIndex === -1) {
      throw new NotFoundException(`Animal com ID ${id} não encontrado! Verifique as informações fornecidas`);
    }

    this.animais.splice(animalIndex, 1);
  }
}