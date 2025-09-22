import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateAnimalDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  especie: string;

  @IsInt()
  idade: number;
}