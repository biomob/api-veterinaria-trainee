//array contendo as informacoes
let animais = [
    { id: 1, nome: "Rex", especie: "Cachorro", idade: "5" },
    { id: 2, nome: "Miau", especie: "Gato", idade: "2" },
    { id: 3, nome: "Pretinho", especie: "Gato", idade: "4" },
    { id: 4, nome: "Lolla", especie: "Gato", idade: "6" },
    { id: 5, nome: "Bob", especie: "Cachorro", idade: "1" },
]

//implementacao de requisicoes
//GET/ animais
exports.findAll = (req, res) => {
    res.status(200).json(animais)
}

//metodo por id
//GET/animais/:id
exports.findById = (req, res) => {
    const id = parseInt(req.params.id);
    const animal = animais.find((animal) => animal.id === id)

    //verifica se o animal existe
    if (!animal) {
        return res.status(404).json({
            error: "O animal informado nao foi encontrado"
        })
    }
    res.status(200).json(animal)
}


//POST/animais
exports.createAnimal = (req, res) => {
    const { nome, especie, idade } = req.body;

    //verifica os campos informados
    if (!nome || !especie || idade === undefined || idade === null) {
        return res.status(400).json({ error: "Os campos informados sao obrigatorios ou estao preenchidos errados" });
    }

    //verifica se o animal informado ja esta cadastrado
    const animalExiste = animais.find((animal) => animal.nome.toLowerCase() === nome.toLowerCase() && animal.especie.toLowerCase() === especie.toLowerCase);

    if (animalExiste) {
        return res.status(409).json({ error: "O animal informado ja esta cadastrado" })
    }

    const newAnimal = {
        id: animais.length > 0 ? animais[animais.length - 1].id + 1 : 1,
        nome,
        especie,
        idade
    }
    animais.push(newAnimal);
    res.status(201).json(newAnimal)

}

//atualiza o animal com o id
//PUT/animais/:id
exports.updateAnimal = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, especie, idade } = req.body;

    const animal = animais.find(animal => animal.id === id);
    if (!animal) {
        return res.status(404).json({ error: "Animal informado nao econtroado" })
    }
    //atualizar os campos com os dados
    if (nome) animal.nome = nome;
    if (especie) animal.especie = especie;
    if (idade) animal.idade = idade;
    res.status(200).json(animal);
}

//DELETE /animais/:id
exports.deleteAnimal = (req, res) => {
    const id = parseInt(req.params.id);
    const index = animais.findIndex((animal) => animal.id === id)

    if (index === -1) {
        return res.status(404).json({ error: "Animal informado nao foi encontrado" })
    }
    animais.splice(index, 1);
    res.status(204).send();
}
