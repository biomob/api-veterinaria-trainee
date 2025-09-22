import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AnimaisService } from './animais.service';
import { Animal } from './animal.model';

@Controller('animais')
export class AnimaisController {
  constructor(private readonly animaisService: AnimaisService) {}

  @Post()
  create(@Body() body: Omit<Animal, 'id'>): Animal {
    return this.animaisService.create(body);
  }

  @Get()
  findAll(@Query('especie') especie?: string): Animal[] {
    return this.animaisService.findAll(especie);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Animal {
    return this.animaisService.findOne(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: Partial<Omit<Animal, 'id'>>,
  ): Animal {
    return this.animaisService.update(Number(id), body);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string): void {
    this.animaisService.remove(Number(id));
  }
}
