import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateAnimalDto {
  @ApiProperty({description: 'Nome do animal',example: 'Rex',required: true,})
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'Espécie do animal', examples: ['cachorro', 'gato', 'sapo', 'cobra'], required: true,})
  @IsString()
  @IsNotEmpty()
  especie: string;

  @ApiProperty({
    description: 'Idade do animal em anos', example: 5, minimum: 0, required: true,})
  @IsInt()
  idade: number;
}
