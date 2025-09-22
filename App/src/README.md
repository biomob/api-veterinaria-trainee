# Titulo

API_VETERINARIA

## Subtitulo

## Contexto

Dra. Ana, uma médica veterinária dedicada, está expandindo sua clínica e precisa de uma solução eficiente para gerenciar o cadastro dos animais atendidos. O objetivo da API RESTful é permitir as seguintes questões: registrar, consultar, atualizar e remover pacientes de forma simples e rápida. 🐕🐈

## Descricao

O projeto foi construido na plataforma node js e na linguagem de programação: javascript.

## Instrução de uso

````bash
cd app

```bash
node src/index.js

````

API Endpoints:

POST /animais - Cria o cadastro de um novo animal.
GET /animais - Lista o cadastro de todos os animais.
GET /animais/{id} - Busca o cadastro de um animal por ID.
PUT /animais{id} - Atualiza os dados de um animal por ID.
DELETE /animais/{id} - Remove o cadastro de um animal por ID.
GET /animais/especie/{especie} - Lista do cadastro de animais por espécie.

Uma pequena observação ao testar a API: embora haja um GET ALL para buscar toda a lista de animais cadastrados, não há a possiblidade de fazer um POST - cadastrar dois ou mais animais ao mesmo tempo!!
