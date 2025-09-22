const animals = [
  { id: 1, nome: "miau", especie: "gato", idade: 5 },
  { id: 2, nome: "rex", especie: "cachorro", idade: 3 },
];

class AnimalRepository {
  static criar(novoAnimal) {
    animals.push(novoAnimal);
    return novoAnimal;
  }

  static listarTodos() {
    return animals;
  }

  static buscarPorId(id) {
    return animals.find((a) => a.id === parseInt(id));
  }

  static buscarPorEspecie(especie) {
    return animals.filter((a) => a.especie.toLowerCase() === especie);
  }

  static buscarIndicePorId(id) {
    return animals.findIndex((a) => a.id === parseInt(id));
  }

  static remover(index) {
    return animals.splice(index, 1);
  }

  static obterProximoId() {
    return animals.length > 0 ? animals[animals.length - 1].id + 1 : 1;
  }
}

module.exports = AnimalRepository;
