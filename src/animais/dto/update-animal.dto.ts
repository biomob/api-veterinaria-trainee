import { IsInt, IsOptional, IsString, Min } from "class-validator";

export class UpdateAnimalDto {
    @IsOptional()
    @IsString()
    nome?: string;

    @IsOptional()
    @IsInt()
    @Min(0)
    idade?: number;
}