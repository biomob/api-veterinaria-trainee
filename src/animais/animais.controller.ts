import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AnimaisService } from './animais.service';
import { CreateAnimaisDto } from './dto/create-animais.dto';

@Controller('animais')
export class AnimaisController {
  constructor(private readonly animaisService: AnimaisService) {}

  @Post()
  create(@Body() createAnimaisDto: CreateAnimaisDto) {
    return this.animaisService.create(createAnimaisDto);
  }

  @Get()
  findAll() {
    const animais = this.animaisService.findAll();

    return animais.map(a => {
      const historicoSemAnimal = a.historicoConsultas?.map(c => {
        const { animal, ...rest } = c;
        return rest;
      });

      return {
        ...a,
        historicoConsultas: historicoSemAnimal || [],
      };
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const animal = this.animaisService.findOne(+id);

    const historicoSemAnimal = animal.historicoConsultas?.map(c => {
      const { animal, ...rest } = c;
      return rest;
    });

    return {
      ...animal,
      historicoConsultas: historicoSemAnimal || [],
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.animaisService.remove(+id);
    return { message: `Animal ${id} removido com sucesso` };
  }
}
