import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateAnimalDto {
  @ApiProperty({description: 'Nome do animal',example: 'Rex',required: true,})
  @IsString({message:'O nome não pode ser um número'})
  @IsNotEmpty({message: 'O nome é obrigatório'})
  nome: string;

  @ApiProperty({
    description: 'Espécie do animal',
    enum: ['cachorro', 'gato', 'pássaro', 'coelho', 'hamster'],
    example: 'cachorro',
    required: true
  })
  @IsString({message:'A espécie não pode ser um número'})
  @IsNotEmpty({ message: 'A Espécie é obrigatória' })
  especie: string;

  @ApiProperty({
    description: 'Idade do animal em anos', example: 5, minimum: 1, required: true,})
  @IsInt({message:'A idade deve ser um número'})
  @IsNotEmpty({ message: 'A idade é obrigatória' })
  @Min(1, { message: 'Insira uma idade válida' })
  idade: number;
}
