import { Controller, Get, Post, Body, Param, Delete, Query, ParseIntPipe, Put } from '@nestjs/common';
import type { Animal } from './entities/animal.entity';
import { AnimaisService } from './animais.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Controller('animais')
export class AnimaisController {
  constructor(private readonly animaisService: AnimaisService) {}

  @Post()
  create(@Body() createAnimaiDto: CreateAnimalDto) {
    return this.animaisService.create(createAnimaiDto);
  }

  @Get()
  findAll(@Query('especie') especie?: string): Animal[] {  //@Query('especie') serve para acapturar o parâmetro da URL.
    return this.animaisService.findAll(especie);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Animal {
    return this.animaisService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateAnimalDto,
  ): Animal {
    return this.animaisService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animaisService.remove(+id);
  }
}
