import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { ConsultasService } from './consultas.service';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { Consulta } from './entities/consulta.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('consultas')
@Controller('consultas')
export class ConsultasController {
  constructor(private readonly consultasService: ConsultasService) {}

  @ApiOperation({ summary: 'Cria uma nova consulta, caso necessário..um animal novo também' })
  @ApiResponse({ status: 201, description: 'Consulta criada com sucesso.' })
  @Post()
  create(@Body() createConsultaDto: CreateConsultaDto): Partial<Consulta> {
    return this.consultasService.create(createConsultaDto);
  }

  @ApiOperation({ summary: 'Lista todas as consultas cadastradas' })
  @ApiResponse({ status: 200, description: 'Lista retornada com sucesso.' })
  @Get()
  findAll(): Partial<Consulta>[] {
    return this.consultasService.findAll();
  }

  @ApiOperation({ summary: 'Lista uma consulta por ID' })
  @ApiResponse({ status: 201, description: 'Consulta buscada com sucesso.' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Partial<Consulta> {
    return this.consultasService.findOne(id);
  }

  @ApiOperation({ summary: 'Edita uma consulta existente' })
  @ApiResponse({ status: 200, description: 'Consulta editada com sucesso.' })
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateConsultaDto: CreateConsultaDto,
  ): Partial<Consulta> {
    return this.consultasService.update(id, updateConsultaDto);
  }

  @ApiOperation({ summary: 'Deleta uma consulta por ID' })
  @ApiResponse({ status: 201, description: 'Consulta removida com sucesso.' })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.consultasService.remove(id);
  }
}