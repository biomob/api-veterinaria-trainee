import { IsNotEmpty, IsNumber, IsDateString, IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateConsultaDto {

  @IsOptional() @IsNumber() animalId?: number;

  @ApiPropertyOptional({ description: 'Nome do Animal caso queira cadastrar um novo', example: 'Bob' })
  @IsOptional() @IsString() nomeAnimal?: string;

  @ApiPropertyOptional({ description: 'Espécie do Animal caso queira cadastrar um novo', example: 'Gato' })
  @IsOptional() @IsString() especie?: string;

  @ApiPropertyOptional({ description: 'Idade do Animal caso queira cadastrar um novo', example: 3 })
  @IsOptional() @IsNumber() idade?: number;

  @ApiPropertyOptional({ description: 'Gênero do Animal caso queira cadastrar um novo', example: 'Macho' })
  @IsOptional() @IsString() genero?: string;

  @ApiPropertyOptional({ description: 'Responsável do Animal caso queira cadastrar um novo', example: 'Paulo Roberto' })
  @IsOptional() @IsString() responsavel?: string;

  @ApiPropertyOptional({ description: 'Telefone do Responsável caso queira cadastrar um novo', example: '24981224441' })
  @IsOptional() @IsString() telefoneResponsavel?: string;

  @ApiProperty({ description: 'Data da consulta', type: String, format: 'date-time', example: '2025-09-22' })
  @IsNotEmpty() @IsDateString() dataConsulta: string;

  @ApiProperty({ description: 'Horário da consulta', type: String, example: '14:50' })
  @IsNotEmpty() @IsString() horarioConsulta: string;

  @ApiProperty({ description: 'Motivo da consulta', example: 'Vacinação' })
  @IsNotEmpty() @IsString() motivoConsulta: string;

  @ApiProperty({ description: 'Valor da consulta', type: Number, example: 200 })
  @IsNotEmpty() @IsNumber() valor: number;
}