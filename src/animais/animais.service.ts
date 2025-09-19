import { Injectable, NotFoundException } from '@nestjs/common';
import { Animal } from './entities/animal.entity';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';



@Injectable()
export class AnimaisService {
  private animais: Animal[] = []; //base de dados em memória
  private nextId = 1; //controla o ID a ser atribuído a um animal novo

  create(createDto: CreateAnimalDto): Animal {
    const novoAnimal: Animal = {
      id: this.nextId++,
      ...createDto,
    };
    this.animais.push(novoAnimal);
    return novoAnimal;
  }

  createList(createDtos: CreateAnimalDto[]): Animal[] {
    const novosAnimais: Animal[] = createDtos.map(dto => {
      const novo: Animal = {
        id: this.nextId++,
        ...dto,
      };
      this.animais.push(novo);
      return novo;
    });

    return novosAnimais;
  }

  findAll(especie?: string): Animal[] {  //Verifica se o filtro foi passado, se não, retorna todos os animais.
    if (especie) {
      return this.animais.filter(animal => animal.especie === especie);
    }
    return this.animais;
  }

  findOne(id: number): Animal {
    const animal = this.animais.find(a => a.id === id);
    if (!animal) {
      throw new NotFoundException('Animal não encontrado.')
    }
    return animal;
  }

  update(id: number, updateDto: UpdateAnimalDto): Animal {
    const animal = this.findOne(id);

    if (updateDto.nome !== undefined) {
      animal.nome = updateDto.nome;
    }
    
    if (updateDto.idade !== undefined) {
      animal.idade = updateDto.idade;
    }
    return animal;
  }

  remove(id: number): void {
    const index = this.animais.findIndex(a => a.id === id);

    if (index === -1) {
      throw new NotFoundException('Animal não encontrado');
    }

    this.animais.splice(index, 1);
  }
}
