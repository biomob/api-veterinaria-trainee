import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalDto } from './create-animai.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {
  @ApiPropertyOptional({
    description: 'Nome do animal',
    example: 'Rex'
  })
  nome?: string;

  @ApiPropertyOptional({
    description: 'Espécie do animal',
    examples: ['cachorro', 'gato', 'sapo', 'cobra']
  })
  especie?: string;

  @ApiPropertyOptional({
    description: 'Idade do animal em anos',
    example: 5,
    minimum: 0
  })
  idade?: number;
}