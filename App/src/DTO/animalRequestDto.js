class AnimalRequestDto {
  constructor(nome, especie, idade) {
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
  }

  static criarInstancia(dados) {
    const { nome, especie, idade } = dados;
    return new AnimalRequestDto(nome, especie, idade);
  }
}

module.exports = AnimalRequestDto;
