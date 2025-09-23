import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalDto } from './create-animai.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, Min } from 'class-validator';

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {
  @ApiPropertyOptional({
    description: 'Nome do animal',
    example: 'Rex'
  })
  nome?: string;

  @ApiPropertyOptional({
    description: 'Espécie do animal',
    example:'cachorro'
  })
  especie?: string;
  
  @ApiPropertyOptional({
    description: 'Idade do animal em anos',
    example: 5,
    minimum: 1
  })
  @IsInt({ message: 'Idade deve ser um número inteiro' })
  @Min(1, { message: 'Insira uma idade válida' }) 
  idade?: number;
}