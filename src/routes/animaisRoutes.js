const express = require('express');
const router = express.Router();
const animaisController = require('../controllers/animaisController');

//traz todos os animais
router.get('/animais', animaisController.findAll);

//traz animal por id
router.get('/animais/:id', animaisController.findById);

//cria um novo animal
router.post('/animais', animaisController.createAnimal);

//atualiza o animal por id
router.put('/animais/:id', animaisController.updateAnimal);

//exclusao do animal por id
router.delete('/animais/:id', animaisController.deleteAnimal);

module.exports = router;

