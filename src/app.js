// src/app.js
const express = require('express');
const animalsRouter = require('./routes/animals'); // Importa as rotas

const app = express();
const PORT = 3000;

// Middleware para parsear o corpo das requisições como JSON
app.use(express.json());

// Conecta a rota base '/animais' ao nosso roteador
app.use('/animais', animalsRouter);

// Rota de saúde/teste
app.get('/', (req, res) => {
    res.status(200).send('API Veterinária Trainee - Rodando! Endpoint principal: /animais');
});

// Tratamento de rotas não encontradas (404)
app.use((req, res, next) => {
    res.status(404).json({ error: `Rota não encontrada: ${req.method} ${req.originalUrl}` });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`Endpoints principais prontos: POST, GET, PUT, DELETE /animais e /animais/:id`);
});