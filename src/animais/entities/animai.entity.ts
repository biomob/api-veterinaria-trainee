export class Animal {
  id: number;
  nome: string;
  especie: string;
  idade: number;

  constructor(id: number, nome: string, especie: string, idade: number) {
    this.id = id;
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
  }
}