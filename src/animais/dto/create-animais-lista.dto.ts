import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ValidateNested, ArrayMinSize, ArrayMaxSize } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAnimalDto } from './create-animai.dto';

export class CreateAnimaisListDto {
  @ApiProperty({
    description: 'Lista de animais para cadastrar uma lista de animais',
    type: [CreateAnimalDto],
    minItems: 1,
    maxItems: 50,
    example: [
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
      }
    ]
  })
  @IsArray({ message: 'Deve ser uma lista de animais' })
  @ArrayMinSize(1, { message: 'Deve conter pelo menos um animal' })
  @ArrayMaxSize(50, { message: 'Máximo de 50 animais por vez' })
  @ValidateNested({ each: true })
  @Type(() => CreateAnimalDto)
  animais: CreateAnimalDto[];
}