const AnimalService = require("../Service/animalService");

class AnimalController {
  static criar(req, res) {
    AnimalService.criar(req, res);
  }

  static listarTodos(req, res) {
    AnimalService.listarTodos(req, res);
  }

  static listarPorId(req, res) {
    AnimalService.buscarPorId(req, res);
  }

  static listarPorEspecie(req, res) {
    AnimalService.buscarPorEspecie(req, res);
  }

  static atualizar(req, res) {
    AnimalService.atualizar(req, res);
  }

  static deletar(req, res) {
    AnimalService.deletar(req, res);
  }
}

module.exports = AnimalController;
