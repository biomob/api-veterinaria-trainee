import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode, ParseIntPipe, HttpStatus, Put } from '@nestjs/common';
import { AnimaisService } from './animais.service';
import { CreateAnimalDto } from './dto/create-animai.dto';
import { UpdateAnimalDto } from './dto/update-animai.dto';
import { Animal } from './entities/animai.entity';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateAnimaisListDto } from './dto/create-animais-lista.dto';

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

@Post('lista')
@ApiOperation({ 
  summary: 'Cadastrar múltiplos animais',
  description: 'Permite cadastrar uma lista de animais. Máximo de 50 animais por requisição.'
})
@ApiCreatedResponse({
  description: 'Lista de animais cadastrados com sucesso',
  type: [Animal],
  schema: {
    example: [
      {
        id: 1,
        nome: 'Rex',
        especie: 'cachorro',
        idade: 5
      },
      {
        id: 2,
        nome: 'Mimi',
        especie: 'gato', 
        idade: 3
      },
      {
        id: 3,
        nome: 'Piu',
        especie: 'pássaro',
        idade: 1
      }
    ]
  }
})
@ApiBadRequestResponse({
  description: 'Dados inválidos fornecidos',
  schema: {
    example: {
      message: [
        'O nome é obrigatório',
        'A Idade não pode ser negativa',
        'Deve conter pelo menos um animal'
      ],
      error: 'Bad Request',
      statusCode: 400
    }
  }
})
@ApiBody({ 
  type: CreateAnimaisListDto,
  description: 'Lista de animais para cadastrar',
  examples: {
    'exemplo-basico': {
      summary: 'Exemplo básico com 2 animais',
      description: 'Exemplo simples cadastrando um cachorro e um gato',
      value: {
        animais: [
          {
            nome: 'Rex',
            especie: 'cachorro',
            idade: 5
          },
          {
            nome: 'Mimi',
            especie: 'gato',
            idade: 3
          }
        ]
      }
    },
    'exemplo-completo': {
      summary: 'Exemplo com várias espécies',
      description: 'Exemplo mais completo com diferentes tipos de animais',
      value: {
        animais: [
          {
            nome: 'Rex',
            especie: 'cachorro',
            idade: 5
          },
          {
            nome: 'Mimi',
            especie: 'gato',
            idade: 3
          },
          {
            nome: 'Piu',
            especie: 'pássaro',
            idade: 1
          },
          {
            nome: 'Coelhinho',
            especie: 'coelho',
            idade: 2
          }
        ]
      }
    }
  }
})
createMultiple(@Body() CreateAnimaisListDto: CreateAnimaisListDto): Animal[] {
  return this.animaisService.createMultiple(CreateAnimaisListDto);
}
 }
