class AnimalResponseDto {
  constructor(id, nome, especie, idade) {
    this.id = id;
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
  }

  static criarInstancia(animal) {
    return new AnimalResponseDto(
      animal.id,
      animal.nome,
      animal.especie,
      animal.idade
    );
  }

  static criarLista(animais) {
    return animais.map((animal) => AnimalResponseDto.criarInstancia(animal));
  }
}

module.exports = AnimalResponseDto;
