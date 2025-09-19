import { IsInt, IsString, Min } from "class-validator";


export class CreateAnimalDto {
    @IsString()
    nome: string;

    @IsString()
    especie: string;

    @IsInt()
    @Min(0)
    idade: number;
 }
