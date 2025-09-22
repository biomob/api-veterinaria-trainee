import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { AnimaisService } from './animais.service';
import { CreateAnimaisDto } from './dto/create-animais.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('animais')
@Controller('animais')
export class AnimaisController {
  constructor(private readonly animaisService: AnimaisService) {}

  @ApiOperation({ summary: 'Cria um novo animal' })
  @ApiResponse({ status: 201, description: 'Animal criado com sucesso.' })
  @Post()
  create(@Body() createAnimaisDto: CreateAnimaisDto) {
    return this.animaisService.create(createAnimaisDto);
  }

  @ApiOperation({ summary: 'Lista todos os animais cadastrados' })
  @ApiResponse({ status: 200, description: 'Lista retornada com sucesso.' })
  @Get()
  findAll() {
    const animais = this.animaisService.findAll();
    return animais.map(a => {
      const historicoSemAnimal = a.historicoConsultas?.map(c => {
        const { animal, ...rest } = c;
        return rest;
      });
      return { ...a, historicoConsultas: historicoSemAnimal || [] };
    });
  }

  @ApiOperation({ summary: 'Lista um animal por ID' })
  @ApiResponse({ status: 201, description: 'Animal buscado com sucesso.' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    const animal = this.animaisService.findOne(id);
    const historicoSemAnimal = animal.historicoConsultas?.map(c => {
      const { animal, ...rest } = c;
      return rest;
    });
    return { ...animal, historicoConsultas: historicoSemAnimal || [] };
  }

  @ApiOperation({ summary: 'Edita um animal existente' })
  @ApiResponse({ status: 200, description: 'Animal editado com sucesso.' })
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAnimaisDto: CreateAnimaisDto) {
    return this.animaisService.update(id, updateAnimaisDto);
  }

  @ApiOperation({ summary: 'Deleta um animal por ID' })
  @ApiResponse({ status: 201, description: 'Animal removido com sucesso.' })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    this.animaisService.remove(id);
    return { message: `Animal ${id} removido com sucesso` };
  }
}
