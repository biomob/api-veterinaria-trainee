
#  🐾 API Veterinária - Projeto Trainee 🐾

## Contexto

Criação de uma API RESTful utilizando os metodos HTTP para que possa permitir ao usuario registrar, consultar, atualizar e remover os pacientes de forma rápida e simples. 🐕🐈


## Stacks utilizadas

**Back-end:** NodeJs, Express, TypesCript, Docker e Dados Armazenados em Memória (uso de vetor.)


## Funcionalidades

- Inserir um novo paciente. ✔️ 
- Retornar uma lista de pacientes cadastrados. ✔️ 
- Retornar animais pelo ID informado. ✔️ 
- Atualizar as informações de um animal pelo ID informado. ✔️
- Deletar um animal pelo ID informado. ✔️

### Adiciona um novo animal à lista de pacientes.
#### Exemplos de corpo da requisição:

        ➕ POST/animais - http://localhost:3000/animais

        ✔️ {"id": 6,"nome": "Farao","especie": "Cachorro","idade": 5}
            O retorno da mensagem informa 201 Created.

### Retorna uma lista de animais cadastrados ou por seu ID informado.
#### Exemplos de corpo da requisição:

        📋 GET/animais - http://localhost:3000/animais
        - Se encontrado: objeto JSON, retorna os detalhes de um animal pelo ID.

        ✔️ [{"id": 1,"nome": "Rex","especie": "Cachorro","idade": "5"},
            {"id": 2,"nome": "Miau","especie": "Gato","idade": "2"}]

        - Se não encontrado: status 404 Not Found com mensagem de erro
        ❌ http://localhost:3000/animais/62
            {"error": "O animal informado nao foi encontrado"}

        🔍 GET /animais/:id - http://localhost:3000/animais/1
        ✔️ {"id": 1,"nome": "Rex","especie": "Cachorro","idade": "5"}
        

### Alteração de um animal com id.
#### Exemplos de corpo da requisição:
        ✏️ PUT/animais/id - http://localhost:3000/animais/6
        - Se atualizado: retorna o animal atualizado

        ✔️ {"nome": "Fumaca","especie": "Cachorro","idade": 9}

        - Se não encontrado: status 404 Not Found
        ❌ {"error": "Animal informado nao econtroado"}
        
### Exclusao de um animal com id.
#### Exemplos de corpo da requisição:
        🗑️ DELETE /animais/:id - http://localhost:3000/animais/6
        - Se encontrado: exclui o animal informado
        
        - Se não encontrado: status 404 Not Found
        ❌ {"error": "Animal informado nao foi encontrado"}



## Instalação

1 - 📥 Clone este repositório:

```bash
    git clone <URL_DO_REPOSITORIO>
    cd api-veterinaria-trainee
```

2 - 🐳 Construa a imagem Docker:

```bash
    docker build -t api-veterinaria-trainee .
```

3 - ▶️ Execute o contêiner:
```bash
    docker run -p 3000:3000 api-veterinaria-trainee
```