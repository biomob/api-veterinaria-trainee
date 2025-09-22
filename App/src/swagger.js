const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API_Veterinária",
      version: "1.0.0",
      description: "Uma API simples para gerenciar animais",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de desenvolvimento",
      },
    ],
    components: {
      schemas: {
        Animal: {
          type: "object",
          required: ["nome", "especie", "idade"],
          properties: {
            id: {
              type: "integer",
              description: "ID único do animal",
              example: 1,
            },
            nome: {
              type: "string",
              description: "Nome do animal",
              example: "miau",
            },
            especie: {
              type: "string",
              description: "Espécie do animal",
              example: "gato",
            },
            idade: {
              type: "integer",
              description: "Idade do animal em anos",
              example: 5,
            },
          },
        },
        AnimalInput: {
          type: "object",
          required: ["nome", "especie", "idade"],
          properties: {
            nome: {
              type: "string",
              description: "Nome do animal",
              example: "miau",
            },
            especie: {
              type: "string",
              description: "Espécie do animal",
              example: "gato",
            },
            idade: {
              type: "integer",
              description: "Idade do animal em anos",
              example: 5,
            },
          },
        },
        Error: {
          type: "object",
          properties: {
            erro: {
              type: "string",
              example: "Animal não encontrado",
            },
          },
        },
      },
    },
  },
  apis: ["./src/Routes/*.js"], // Em vez de './Routes/*.js'
};

const specs = swaggerJSDoc(options);

module.exports = {
  specs,
  swaggerUi,
};
