const express = require('express');
const app = express();

const conexaoBanco = require('./models/conexaoBanco');
app.get("/", async(req, res) => {
    res.send("Pagina Inicial: - teste");

});

app.listen(8080, () => {
    console.log("Servidor Iniciado na porta 8080: https://localhost:8080");
});

