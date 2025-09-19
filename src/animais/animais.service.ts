import { Injectable, NotFoundException } from '@nestjs/common';
import { Animal } from './entities/animal.entity';
import { CreateAnimalDto } from './dto/create-animal.dto';
// import { UpdateAnimaiDto } from './dto/update-animai.dto';



@Injectable()
export class AnimaisService {
  private animais: Animal[] = [];
  private nextId = 1;

  create(createDto: CreateAnimalDto): Animal {
    const novoAnimal: Animal = {
      id: this.nextId++,
      ...createDto,
    };
    this.animais.push(novoAnimal);
    return novoAnimal;
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

  // update(id: number, updateAnimaiDto: UpdateAnimalDto) {
  //   return `This action updates a #${id} animai`;
  // }

  remove(id: number) {
    return `This action removes a #${id} animai`;
  }
}
