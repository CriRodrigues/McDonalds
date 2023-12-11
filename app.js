const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

//const useRoutes = require('./models/routes');
const conexaobanco = require('./models/conexaoBanco');
const { err } = require('sequelize');
app.use(express.static(path.join(__dirname, 'login')));


app.get("/", async(req, res) => {
    
    res.sendFile(path.join(__dirname, 'login','index.html'));

});

app.get("/conexaobanco", async(req, res) => {
    res.send("Pagina Conexao banco - teste");

});


app.listen(8080, () => {
    console.log("Servidor Iniciado na porta 8080: https://localhost:8080");
});

