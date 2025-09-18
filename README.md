# 🐾 Instruções para o Teste Técnico - API Veterinária Trainee

Bem-vindo ao teste técnico! Este documento contém todas as informações necessárias para você realizar o desafio proposto. Leia atentamente cada seção antes de iniciar o desenvolvimento.

## Contexto

Dra. Ana, uma médica veterinária dedicada, está expandindo sua clínica e precisa de uma solução eficiente para gerenciar o cadastro dos animais atendidos. Sua missão é criar uma API RESTful que permita registrar, consultar, atualizar e remover pacientes de forma simples e rápida. 🐕🐈

## Objetivo do Desafio 🚀

Desenvolver uma API RESTful utilizando Node.js e o framework de sua preferência (Express.js, Fastify ou NestJS), com dados armazenados em memória e dockerização completa.

## Requisitos Técnicos 📋

- Node.js
- Framework: Express.js, Fastify ou NestJS
- Dados em memória (não usar banco de dados)
- Dockerfile funcional
- Porta padrão: 3000

## Endpoints da API

### ➕ POST /animais
Adiciona um novo animal à lista de pacientes.
**Exemplo de corpo da requisição:**
```json
{
	"nome": "Rex",
	"especie": "cachorro",
	"idade": 5
}
```
**Resposta esperada:**
```json
{
	"id": 1,
	"nome": "Rex",
	"especie": "cachorro",
	"idade": 5
}
```

### 📋 GET /animais
Retorna todos os animais cadastrados.
**Filtro por espécie:** `/animais?especie=cachorro`
**Resposta esperada:**
```json
[
	{ "id": 1, "nome": "Rex", "especie": "cachorro", "idade": 5 },
	{ "id": 2, "nome": "Miau", "especie": "gato", "idade": 3 }
]
```

### 🔍 GET /animais/:id
Retorna os detalhes de um animal pelo ID.
- Se encontrado: objeto JSON do animal
- Se não encontrado: status 404 Not Found com mensagem de erro

### ✏️ PUT /animais/:id
Atualiza as informações de um animal pelo ID.
**Exemplo de corpo da requisição:**
```json
{
	"nome": "Max",
	"idade": 6
}
```
- Se atualizado: retorna o animal atualizado
- Se não encontrado: status 404 Not Found

### 🗑️ DELETE /animais/:id
Remove um animal pelo ID.
- Sucesso: status 204 No Content
- Não encontrado: status 404 Not Found

## Critérios de Avaliação 🧐

- Implementação dos requisitos
- Dockerfile funcional
- Organização e estrutura do projeto
- Legibilidade e boas práticas
- Tratamento correto de erros e status HTTP
- Documentação clara

## Como Submeter o Projeto 🏁

1. 📥 **Clone este repositório:**
	 ```
	 git clone <URL_DO_REPOSITORIO>
	 cd api-veterinaria-trainee
	 ```
2. 🐳 **Construa a imagem Docker:**
	 ```
	 docker build -t api-veterinaria-trainee .
	 ```
3. ▶️ **Execute o contêiner:**
	 ```
	 docker run -p 3000:3000 api-veterinaria-trainee
	 ```
4. 📤 **Suba o projeto para o GitHub e compartilhe o link.**

## Observações Importantes ⚠️

- Os dados são armazenados apenas em memória e serão perdidos ao reiniciar a aplicação.
- O projeto é exclusivamente para fins de avaliação técnica.
- Saiba o que está fazendo em cada etapa do desenvolvimento, pois será questionado sobre suas escolhas técnicas.

---

## Material de Apoio 📚

Docker: [Documentação Oficial do Docker](https://docs.docker.com/get-started/)
Aplicação NodeJs com Docker: [Tutorial de Docker para Node.js](https://youtu.be/MiAiFTQjitc)

- Sinta-se a vontade para a escolher o framework que mais domina ou tem interesse em aprender:
Express.js: [Documentação Oficial do Express](https://expressjs.com/)
NestJS: [Documentação Oficial do NestJS](https://docs.nestjs.com/)
Fastify: [Documentação Oficial do Fastify](https://www.fastify.io/docs/latest/)


Em caso de dúvidas, entre em contato! 💬