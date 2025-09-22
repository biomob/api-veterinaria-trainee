const AnimalRepository = require("../Repository/animalRepository");
const AnimalRequestDto = require("../Dto/animalRequestDto");
const AnimalResponseDto = require("../Dto/animalResponseDto");

class AnimalService {
  static criar(req, res) {
    const requestDto = AnimalRequestDto.criarInstancia(req.body);

    if (
      !requestDto.nome ||
      !requestDto.especie ||
      requestDto.idade === undefined
    )
      return res
        .status(400)
        .send("Nome, especie e idade são campos obrigatórios!");

    const novoAnimal = {
      id: AnimalRepository.obterProximoId(),
      nome: requestDto.nome,
      especie: requestDto.especie,
      idade: requestDto.idade,
    };

    const animalCriado = AnimalRepository.criar(novoAnimal);
    const responseDto = AnimalResponseDto.criarInstancia(animalCriado);
    res.status(201).json(responseDto);
  }

  static listarTodos(req, res) {
    const todosAnimais = AnimalRepository.listarTodos();
    const responseDtos = AnimalResponseDto.criarLista(todosAnimais);
    res.status(200).json(responseDtos);
  }

  static buscarPorId(req, res) {
    const animal = AnimalRepository.buscarPorId(req.params.id);
    if (!animal) return res.status(404).send("Animal não encontrado!");

    const responseDto = AnimalResponseDto.criarInstancia(animal);
    res.json(responseDto);
  }

  static buscarPorEspecie(req, res) {
    const especie = req.params.especie.toLowerCase();
    const animaisFiltrados = AnimalRepository.buscarPorEspecie(especie);

    if (animaisFiltrados.length === 0) {
      return res.status(404).json({
        erro: `Nenhum animal da espécie '${req.params.especie}' foi encontrado`,
      });
    }

    const responseDtos = AnimalResponseDto.criarLista(animaisFiltrados);
    res.json(responseDtos);
  }

  static atualizar(req, res) {
    const animal = AnimalRepository.buscarPorId(req.params.id);
    if (!animal) return res.status(404).send("Animal não encontrado");

    const requestDto = AnimalRequestDto.criarInstancia(req.body);

    animal.nome = requestDto.nome !== undefined ? requestDto.nome : animal.nome;
    animal.especie =
      requestDto.especie !== undefined ? requestDto.especie : animal.especie;
    animal.idade =
      requestDto.idade !== undefined ? requestDto.idade : animal.idade;

    const responseDto = AnimalResponseDto.criarInstancia(animal);
    res.status(200).json(responseDto);
  }

  static deletar(req, res) {
    const index = AnimalRepository.buscarIndicePorId(req.params.id);
    if (index === -1) return res.status(404).send("Animal não encontrado");

    let animalExcluido = AnimalRepository.remover(index);
    const responseDto = AnimalResponseDto.criarInstancia(animalExcluido[0]);
    res.status(204).json(responseDto);
  }
}

module.exports = AnimalService;
