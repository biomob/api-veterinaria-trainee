import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateAnimaisDto {
  @IsNotEmpty() @IsString() nome: string;
  @IsNotEmpty() @IsString() especie: string;
  @IsNotEmpty() @IsInt() idade: number;
  @IsNotEmpty() @IsString() genero: string;
  @IsNotEmpty() @IsString() responsavel: string;
  @IsNotEmpty() @IsString() telefoneResponsavel: string;
}