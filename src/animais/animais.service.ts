import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animai.dto';
import { UpdateAnimalDto } from './dto/update-animai.dto';
import { Animal } from './entities/animai.entity';
import { CreateAnimaisListDto } from './dto/create-animais-lista.dto';

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
  if (this.animais.length === 0) {
    throw new NotFoundException('Nenhum animal foi encontrado.');
  }

  if (especie) {
    const animaisFiltrados = this.animais.filter(animal => 
      animal.especie.toLowerCase() === especie.toLowerCase()
    );
    
    if (animaisFiltrados.length === 0) {throw new NotFoundException(`Nenhum animal da espécie '${especie}' foi encontrado`);}
    return animaisFiltrados;
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

createMultiple(createAnimaisListDto: CreateAnimaisListDto): Animal[] {
  const novosAnimais: Animal[] = [];
  
  for (const animalDto of createAnimaisListDto.animais) {
    const novoAnimal = new Animal(
      this.Id++,
      animalDto.nome,
      animalDto.especie,
      animalDto.idade,
    );
    this.animais.push(novoAnimal);
    novosAnimais.push(novoAnimal);
  }
  
  return novosAnimais;
}
}