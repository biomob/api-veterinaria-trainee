class AnimalModel {
  constructor(id, nome, especie, idade) {
    this.id = id;
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
  }

  static criarInstancia(dados) {
    const { id, nome, especie, idade } = dados;
    return new AnimalModel(id, nome, especie, idade);
  }

  toJSON() {
    return {
      id: this.id,
      nome: this.nome,
      especie: this.especie,
      idade: this.idade,
    };
  }
}

module.exports = AnimalModel;
