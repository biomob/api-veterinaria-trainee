import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode, ParseIntPipe, HttpStatus, Put } from '@nestjs/common';
import { AnimaisService } from './animais.service';
import { CreateAnimalDto } from './dto/create-animai.dto';
import { UpdateAnimalDto } from './dto/update-animai.dto';
import { Animal } from './entities/animai.entity';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('animais')
@Controller('animais')
export class AnimaisController {
  constructor(private readonly animaisService: AnimaisService) {}

  @Post()
   @ApiOperation({ 
      summary: 'Cadastrar novo animal',
      description: 'Adiciona um novo animal à lista de pacientes da clínica'
    })
    @ApiCreatedResponse({
      description: 'Animal cadastrado com sucesso',
      type: Animal
    })
    @ApiBadRequestResponse({
      description: 'Dados inválidos fornecidos'
    })
    @ApiBody({ type: CreateAnimalDto })
  create(@Body() createAnimalDto: CreateAnimalDto):Animal {
    return this.animaisService.create(createAnimalDto);
  }

  @Get()
  @ApiOperation({ 
      summary: 'Listar animais',
      description: 'Retorna todos os animais cadastrados. Pode ser filtrado por espécie.'
    })
    @ApiOkResponse({
      description: 'Lista de animais recuperada com sucesso',
      type: [Animal]
    })
    @ApiQuery({
      name: 'especie',
      required: false,
      description: 'Filtrar animais por espécie',
      examples: {
        'cachorro': { value: 'cachorro' },
        'gato': { value: 'gato' },
        'sapo': { value: 'sapo' }
      }
    })
      findAll(@Query('especie') especie?: string): Animal[] {
        return this.animaisService.findAll(especie);
      }

  @Get(':id')
   @ApiOperation({ 
      summary: 'Buscar animal por ID',
      description: 'Retorna os detalhes de um animal específico pelo seu ID'
    })
    @ApiOkResponse({
      description: 'Animal encontrado',
      type: Animal
    })
    @ApiNotFoundResponse({
      description: 'Animal não encontrado'
    })
    @ApiParam({
      name: 'id',
      description: 'ID do animal',
      example: 1
    })
     findOne(@Param('id', ParseIntPipe) id: number): Animal {
       return this.animaisService.findOne(id);
     }
 
   @Put(':id')
   @ApiOperation({ 
       summary: 'Atualizar animal',
       description: 'Atualiza as informações de um animal existente'
     })
     @ApiOkResponse({
       description: 'Animal atualizado com sucesso',
       type: Animal
     })
     @ApiNotFoundResponse({
       description: 'Animal não encontrado'
     })
     @ApiBadRequestResponse({
       description: 'Dados inválidos fornecidos'
     })
     @ApiParam({
       name: 'id',
       description: 'ID do animal a ser atualizado',
       example: 1
     })
     @ApiBody({ type: UpdateAnimalDto })
     update(@Param('id', ParseIntPipe) id: number,
       @Body() updateAnimalDto: UpdateAnimalDto,): Animal {
       return this.animaisService.update(id, updateAnimalDto);
     }
 
   @Delete(':id')
   @HttpCode(HttpStatus.NO_CONTENT)
   @ApiOperation({ 
    summary: 'Remover animal',
    description: 'Remove um animal da lista de pacientes'
  })
  @ApiNoContentResponse({
    description: 'Animal removido com sucesso'
  })
  @ApiNotFoundResponse({
    description: 'Animal não encontrado'
  })
  @ApiParam({
    name: 'id',
    description: 'ID do animal a ser removido',
    example: 1
  })
   remove(@Param('id', ParseIntPipe) id: number): void {
     return this.animaisService.remove(id);
   }
 }
