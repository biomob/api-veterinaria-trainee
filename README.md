## 🐾 API Veterinária Trainee

API RESTful para gerenciamento de animais e consultas de uma clínica veterinária, com histórico de consultas, validações, documentação estruturada via Swagger e dockerização. Desenvolvida com Node.js e NestJS.

## Contexto

Dra. Ana está expandindo sua clínica e precisa de uma solução eficiente para gerenciar o cadastro de animais e suas consultas. Esta API permite:

- Registrar, consultar, atualizar e remover animais.
- Agendar consultas com validações para evitar duplicidade de horários.
- Editar, remover e consultar as consultas.
- Manter um histórico de consultas por animal.

## Funcionalidades implementadas 🚀

- API criada com o uso de Node.js e NestJS.
- Cadastro de animais e consultas.
- Na hora de criar uma consulta é permitido criar um animal junto, caso ele não esteja cadastrado.
- Proteção para não permitir duas consultas no mesmo dia e horário.
- Mensagens de erro personalizadas, como: ID do animal não encontrado, consulta já marcada para este dia e horário, cadastro de animal requer todos os campos preenchidos.
- Ao apagar um animal, todo o histórico de consultas é removido automaticamente.
- Documentação Swagger, podendo facilitar os testes por meio de: http://localhost:3000/api 
- API pronta para rodar tanto via npm quanto via Docker.

## Tecnologias utilizadas 📋

- Node.js
- Framework: NestJS
- Dados em memória 
- Dockerfile funcional
- Porta padrão: 3000
- Swagger

## Arquitetura do projeto

O projeto segue o padrão modular do NestJS, organizado em dois módulos principais: Animais e Consultas, com Controller, Service, DTO e Entitys.

🔹 Animal
- Campos: id, nome, especie, idade, genero, responsavel, telefoneResponsavel.
- Possui histórico de consultas (historicoConsultas?: Consulta[]).
- Ao ser removido, todas as consultas do histórico também são deletadas.

🔹 Consulta
- Campos: id, animal, dataConsulta, horarioConsulta, motivoConsulta, valor.
- Verifica conflitos de data e horário para evitar duplicidade.
- Ao criar uma consulta, é possível vincular a um animal existente ou criar um novo automaticamente.

🔹 Fluxo da aplicação

- Endpoints Animais → chamam AnimaisService
Criação, leitura, atualização e remoção de animais
Validações de campos obrigatórios
Remoção de histórico de consultas ao deletar um animal

- Endpoints Consultas → chamam ConsultasService
Criação de consultas vinculadas a animais
Proteção contra agendamento duplicado (mesmo dia e horário)
Atualização e remoção de consultas
Retorno de dados do animal sem duplicar o histórico

🔹 Proteções e Validações

- Cadastro de animais exige todos os campos preenchidos.
- Não é permitido duas consultas no mesmo dia e horário.
- Mensagens de erro personalizadas para cada situação (ex: ANIMAL_NAO_ENCONTRADO, CONSULTA_CONFLITO).
- Ao apagar um animal, o histórico de consultas é automaticamente removido.

## Como Rodar o projeto 🏁

1. 🐳 **Via Docker**

- docker build -t api-veterinaria-trainee .
- docker run -p 3000:3000 api-veterinaria-trainee

2. ▶️ **Via npm**

- npm run start:dev
- localhost:3000/api para testes

## OBSERVAÇÕES

Tanto o Node quanto o Nest são novos pra mim, então pode ser que não tenha ido para resoluções tão boas, pelos melhores caminhos mas foi o jeito que consegui entregar, neste momento. Obrigada, qualquer dúvida..Estou a disposição