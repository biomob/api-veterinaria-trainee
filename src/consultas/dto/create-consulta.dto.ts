import { IsNotEmpty, IsNumber, IsDateString, IsString, IsOptional } from 'class-validator';

export class CreateConsultaDto {
  @IsOptional()
  @IsNumber()
  animalId?: number;          // se existir, usa o animal existente

  @IsOptional()
  @IsString()
  nomeAnimal?: string;

  @IsOptional()
  @IsString()
  especie?: string;

  @IsOptional()
  @IsNumber()
  idade?: number;

  @IsOptional()
  @IsString()
  genero?: string;

  @IsOptional()
  @IsString()
  responsavel?: string;

  @IsOptional()
  @IsString()
  telefoneResponsavel?: string;

  @IsNotEmpty()
  @IsDateString()
  dataConsulta: string;

  @IsNotEmpty()
  @IsString()
  horarioConsulta: string;

  @IsNotEmpty()
  @IsString()
  motivoConsulta: string;

  @IsNotEmpty()
  @IsNumber()
  valor: number;
}