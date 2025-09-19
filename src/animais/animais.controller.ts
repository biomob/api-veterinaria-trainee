import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Animal } from './entities/animal.entity';
import { AnimaisService } from './animais.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
// import { UpdateAnimaiDto } from './dto/update-animai.dto';

@Controller('animais')
export class AnimaisController {
  constructor(private readonly animaisService: AnimaisService) {}

  @Post()
  create(@Body() createAnimaiDto: CreateAnimalDto) {
    return this.animaisService.create(createAnimaiDto);
  }

  @Get()
  findAll() {
    return this.animaisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animaisService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAnimaiDto: UpdateAnimaiDto) {
  //   return this.animaisService.update(+id, updateAnimaiDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animaisService.remove(+id);
  }
}
