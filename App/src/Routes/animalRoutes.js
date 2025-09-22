const express = require("express");
const AnimalController = require("../controller/AnimalController");
const router = express.Router();

router.post("/animais", AnimalController.criar);
router.get("/animais", AnimalController.listarTodos);
router.get("/animais/:id", AnimalController.listarPorId);
router.get("/animais/especie/:especie", AnimalController.listarPorEspecie);
router.put("/animais/:id", AnimalController.atualizar);
router.delete("/animais/:id", AnimalController.deletar);

/**
 * @swagger
 * /animais:
 *   post:
 *     summary: Cria o cadastro de um novo animal.
 *     tags: [Animais]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnimalInput'
 *     responses:
 *       201:
 *         description: Cadastro de animal criado com sucesso!!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 *       400:
 *         description: Dados inválidos.
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Nome, especie e idade são campos obrigatórios!!"
 */
router.post("/animais", AnimalController.criar);

/**
 * @swagger
 * /animais:
 *   get:
 *     summary: Lista o cadastro de todos os animais.
 *     tags: [Animais]
 *     responses:
 *       200:
 *         description: Lista de animais.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Animal'
 */
router.get("/animais", AnimalController.listarTodos);

/**
 * @swagger
 * /animais/{id}:
 *   get:
 *     summary: Busca o cadastro de um animal por ID.
 *     tags: [Animais]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do animal
 *     responses:
 *       200:
 *         description: Cadastro de animal encontrado!!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 *       404:
 *         description: Cadastro de animal não encontrado!!
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Animal não encontrado!!"
 */
router.get("/animais/:id", AnimalController.listarPorId);

/**
 * @swagger
 * /animais/especie/{especie}:
 *   get:
 *     summary: Lista do cadastro de animais por espécie.
 *     tags: [Animais]
 *     parameters:
 *       - in: path
 *         name: especie
 *         schema:
 *           type: string
 *         required: true
 *         description: Espécie do animal
 *         example: gato
 *     responses:
 *       200:
 *         description: Lista de cadastro de animais da espécie.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Animal'
 *       404:
 *         description: Nenhum cadastro de animal foi encontrado para a espécie!!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/animais/especie/:especie", AnimalController.listarPorEspecie);

/**
 * @swagger
 * /animais/{id}:
 *   put:
 *     summary: Atualiza os dados de um animal por ID.
 *     tags: [Animais]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do animal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "miau atualizado"
 *               especie:
 *                 type: string
 *                 example: "gato"
 *               idade:
 *                 type: integer
 *                 example: 6
 *     responses:
 *       200:
 *         description: Dados do animal atualizados com sucesso!!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 *       404:
 *         description: Cadastro de animal não encontrado!!
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Animal não encontrado!!"
 */
router.put("/animais/:id", AnimalController.atualizar);

/**
 * @swagger
 * /animais/{id}:
 *   delete:
 *     summary: Remove o cadastro de um animal por ID.
 *     tags: [Animais]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do animal
 *     responses:
 *       204:
 *         description: Cadastro de animal removido com sucesso!!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 *       404:
 *         description: Cadastro de animal não encontrado!!
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Animal não encontrado!!"
 */
router.delete("/animais/:id", AnimalController.deletar);

module.exports = router;
