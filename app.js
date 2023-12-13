const express = require('express');
const path = require('path');
const app = express();
const bodyParser = ('body-parser');
//app.use(express.json());

//app.use(bodyParser.json());

const conexaobanco = require('./models/conexaoBanco');
//const useRoutes = require('../models');


app.use(express.static(path.join(__dirname, 'login')));

app.get("/", async(req, res) => {
    
    res.sendFile(path.join(__dirname, 'login','index.html'));

});

app.get("/conexaobanco", async(req, res) => {
    res.send("Pagina Conexao banco - teste");

});

//app.use('/cadastro', useRoutes.cliente); 

app.listen(8080, () => {
    console.log("Servidor Iniciado na porta 8080: https://localhost:8080");
});