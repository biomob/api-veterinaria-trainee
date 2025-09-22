const express = require("express");
const cors = require("cors");
const animalRoutes = require("./Routes/animalRoutes");
const { specs, swaggerUi } = require("./swagger");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(animalRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(
    `Documentação da API disponível em http://localhost:${port}/api-docs`
  );
});
