import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ConsultasService } from './consultas.service';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { Consulta } from './entities/consulta.entity';

@Controller('consultas')
export class ConsultasController {
  constructor(private readonly consultasService: ConsultasService) {}

  @Post()
  create(@Body() createConsultaDto: CreateConsultaDto): Partial<Consulta> {
    return this.consultasService.create(createConsultaDto);
  }

  @Get()
  findAll(): Partial<Consulta>[] {
    return this.consultasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Partial<Consulta> {
    return this.consultasService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultasService.remove(+id);
  }
}