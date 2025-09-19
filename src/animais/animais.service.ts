import { Injectable } from '@nestjs/common';
import { CreateAnimaiDto } from './dto/create-animai.dto';
import { UpdateAnimaiDto } from './dto/update-animai.dto';

@Injectable()
export class AnimaisService {
  create(createAnimaiDto: CreateAnimaiDto) {
    return 'This action adds a new animai';
  }

  findAll() {
    return `This action returns all animais`;
  }

  findOne(id: number) {
    return `This action returns a #${id} animai`;
  }

  update(id: number, updateAnimaiDto: UpdateAnimaiDto) {
    return `This action updates a #${id} animai`;
  }

  remove(id: number) {
    return `This action removes a #${id} animai`;
  }
}
