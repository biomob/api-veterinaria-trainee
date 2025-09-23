# 🐾 API Veterinária Trainee  

Este é o projeto desenvolvido para o **Teste Técnico - API Veterinária Trainee**.  

---

## 📖 Contexto  
Dra. Ana, uma médica veterinária dedicada, está expandindo sua clínica e precisava de uma solução eficiente para gerenciar o cadastro dos animais atendidos.  
Para atender a essa necessidade, desenvolvi uma **API RESTful** que permite registrar, consultar, atualizar e remover pacientes de forma simples e rápida. 🐕🐈  

---

## 🚀 Tecnologias Utilizadas  
- **Node.js**  
- **NestJS**  
- **Swagger** para documentação interativa  
- **Docker** para containerização  
- **Armazenamento em memória** (sem banco de dados)  

---

## ⚙️ Funcionalidades Implementadas  

Durante o desenvolvimento da API, implementei todos os requisitos propostos e acrescentei melhorias:  

- 🛑 **Validação de dados**:  
  - Impede cadastro de idade negativa  
  - Retorna erro se faltar campos obrigatórios no `POST`  

- 🔍 **Tratamento de erros**:  
  - Retorno `404 Not Found` quando o animal não é encontrado  

- ✏️ **PUT com restrições**:  
  - O **ID não pode ser alterado** na atualização  

- 🆔 **POST inteligente**:  
  - O **ID é gerado automaticamente** no cadastro de um novo animal  

- 📦 **Cadastro em massa**:  
  - Endpoint para cadastrar uma **lista de animais** de uma vez só  

- 📖 **Swagger configurado** para documentação de todos os endpoints:  
  👉 [http://localhost:3000/api-clinica](http://localhost:3000/api-clinica)  

---

## 📡 Endpoints da API  

### ➕ POST `/animais`  
Cadastra um novo animal.  

**Exemplo de requisição**:  
```json
{
  "nome": "Rex",
  "especie": "cachorro",
  "idade": 5
}
````

**Resposta esperada**:

```json
{
  "id": 1,
  "nome": "Rex",
  "especie": "cachorro",
  "idade": 5
}
```

---

### 📦 POST `/animais/lista`

Permite cadastrar **vários animais de uma só vez**.

**Exemplo de requisição**:

```json
[
  { "nome": "Rex", "especie": "cachorro", "idade": 5 },
  { "nome": "Miau", "especie": "gato", "idade": 3 }
]
```

**Resposta esperada**:

```json
[
  { "id": 1, "nome": "Rex", "especie": "cachorro", "idade": 5 },
  { "id": 2, "nome": "Miau", "especie": "gato", "idade": 3 }
]
```

---

### 📋 GET `/animais`

Retorna todos os animais cadastrados.

**Exemplo de resposta**:

```json
[
  { "id": 1, "nome": "Rex", "especie": "cachorro", "idade": 5 },
  { "id": 2, "nome": "Miau", "especie": "gato", "idade": 3 }
]
```

Também aceita filtro por espécie:
`/animais?especie=cachorro`

---

### 🔍 GET `/animais/:id`

Retorna os detalhes de um animal pelo ID.

* **Encontrado**: objeto JSON do animal
* **Não encontrado**: `404 Not Found`

---

### ✏️ PUT `/animais/:id`

Atualiza informações de um animal.

⚠️ **O ID não pode ser alterado.**

**Exemplo de requisição**:

```json
{
  "nome": "Max",
  "idade": 6
}
```

---

### 🗑️ DELETE `/animais/:id`

Remove um animal pelo ID.

* **Sucesso**: `204 No Content`
* **Não encontrado**: `404 Not Found`

---

## 🐳 Como Rodar com Docker

📥 Clone este repositório:

```bash
git clone <URL_DO_REPOSITORIO>
cd api-veterinaria-trainee
```

📦 Construa a imagem:

```bash
docker build -t api-veterinaria-trainee .
```

▶️ Execute o contêiner:

```bash
docker run -p 3000:3000 api-veterinaria-trainee
```

Acesse a API em:
👉 [http://localhost:3000/api-clinica](http://localhost:3000/api-clinica)

---

## 📌 Observações Importantes

* Os dados são armazenados apenas em memória e **serão perdidos ao reiniciar a aplicação**.
* Projeto desenvolvido exclusivamente para **avaliação técnica**.