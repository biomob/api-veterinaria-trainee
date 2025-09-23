import { ApiProperty } from "@nestjs/swagger";

export class Animal {
    @ApiProperty({description:'Id único do animal, gerado automaticamente', example:1})
  id: number;
  
  @ApiProperty({description: 'Nome do animal', example: 'Rex'})
  nome: string;

@ApiProperty({
  description:'Espécie do animal', example: 'Cachorro', enum: ['Cachorro', 'Gato', 'Sapo', 'Cobra']})
especie: string;
  @ApiProperty({
    description: 'Idade do animal em anos', example: 5, minimum: 0})
   idade: number;

  constructor(id: number, nome: string, especie: string, idade: number) {
    this.id = id;
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
  }
}