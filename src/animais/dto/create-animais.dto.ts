import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAnimaisDto {

  @ApiProperty({ description: 'Nome do Animal', example: 'Kyara' })
  @IsNotEmpty() @IsString() nome: string;

  @ApiProperty({ description: 'Espécie do Animal', example: 'Cachorro' })
  @IsNotEmpty() @IsString() especie: string;

  @ApiProperty({ description: 'Idade do Animal', example: 5 })
  @IsNotEmpty() @IsInt() idade: number;

  @ApiProperty({ description: 'Gênero do Animal', example: 'Fêmea' })
  @IsNotEmpty() @IsString() genero: string;

  @ApiProperty({ description: 'Responsável do Animal', example: 'João Guilherme Marinho' })
  @IsNotEmpty() @IsString() responsavel: string;

  @ApiProperty({ description: 'Telefone do Responsável', example: '11987654321' })
  @IsNotEmpty() @IsString() telefoneResponsavel: string;
}