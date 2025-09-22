# 🐾 API Veterinária - Projeto Trainee

Esta é uma API RESTful desenvolvida com **NestJS + TypeScript**, que simula o cadastro e gerenciamento de pacientes (animais) em uma clínica veterinária. O projeto foi criado como parte de um teste técnico para uma vaga de trainee.

## 🚀 Tecnologias Utilizadas

- Node.js
- NestJS
- TypeScript
- Docker
- class-validator (validação dos dados)
- Dados armazenados em memória

## 📦 Funcionalidades da API

### ➕ Criar animal
```http
POST /animais
```
**Corpo esperado:**
```json
{
  "nome": "Rex",
  "especie": "cachorro",
  "idade": 5
}
```

### 📥 Criar múltiplos animais
```http
POST /animais/lote
```
**Corpo esperado:**
```json
[
  { "nome": "Rex", "especie": "cachorro", "idade": 5 },
  { "nome": "Miau", "especie": "gato", "idade": 3 }
]
```

### 📋 Listar animais
```http
GET /animais
GET /animais?especie=gato
```

### 🔍 Buscar por ID
```http
GET /animais/:id
```

### ✏️ Atualizar animal
```http
PUT /animais/:id
```
**Corpo esperado (qualquer campo pode ser enviado):**
```json
{ "nome": "Max", "idade": 6 }
```

### 🗑️ Remover animal
```http
DELETE /animais/:id
```

## 🐳 Docker

### 📄 Build da imagem
```bash
docker build -t api-veterinaria-trainee .
```

### ▶️ Executar container
```bash
docker run -p 3000:3000 api-veterinaria-trainee
```

A API estará disponível em:  
http://localhost:3000

## 🧪 Testes

Os endpoints foram testados com Postman e respondem corretamente com os status HTTP esperados (200, 201, 204, 404).

## 📁 Estrutura do Projeto

- `animais.controller.ts`: lida com as rotas e validações via DTOs
- `animais.service.ts`: lógica de negócio (CRUD e validações)
- `dto/`: objetos para entrada e validação de dados
- `entities/`: definição da entidade Animal
- `main.ts`: configuração da aplicação e pipes globais

## 📌 Observações

- Os dados são armazenados **em memória**, e são perdidos ao reiniciar.
- A aplicação está pronta para deploy com Docker.
- Projeto voltado para **fins didáticos e avaliação técnica**.

---

Desenvolvido com 💙 para o desafio trainee.
