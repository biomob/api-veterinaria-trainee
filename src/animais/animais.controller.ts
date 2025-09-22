import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode, ParseIntPipe, HttpStatus, Put } from '@nestjs/common';
import { AnimaisService } from './animais.service';
import { CreateAnimalDto } from './dto/create-animai.dto';
import { UpdateAnimalDto } from './dto/update-animai.dto';
import { Animal } from './entities/animai.entity';

@Controller('animais')
export class AnimaisController {
  constructor(private readonly animaisService: AnimaisService) {}

  @Post()
  create(@Body() createAnimalDto: CreateAnimalDto) {
    return this.animaisService.create(createAnimalDto);
  }

  @Get()
      findAll(@Query('especie') especie?: string): Animal[] {
        return this.animaisService.findAll(especie);
      }

  @Get(':id')
     findOne(@Param('id', ParseIntPipe) id: number): Animal {
       return this.animaisService.findOne(id);
     }
 
   @Put(':id')
     update(@Param('id', ParseIntPipe) id: number,
       @Body() updateAnimalDto: UpdateAnimalDto,): Animal {
       return this.animaisService.update(id, updateAnimalDto);
     }
 
   @Delete(':id')
   @HttpCode(HttpStatus.NO_CONTENT)
   remove(@Param('id', ParseIntPipe) id: number): void {
     return this.animaisService.remove(id);
   }
 }
