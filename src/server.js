const express = require("express");
const app = express();
const animaisRoutes = require('./routes/animaisRoutes')
const PORT = 3000;

app.use(express.json())
app.use('/', animaisRoutes);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});