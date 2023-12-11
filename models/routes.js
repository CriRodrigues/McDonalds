const express = require('express');
const { cliente } = require('./models/conexaoBanco');  // Importa o modelo User

const router = express.Router();

// Rota POST para criar um novo usuário
router.post("/conexaobanco/cadastro", async(req, res) => {
    
    const{ nome, cpf, telefone, email, senha} = req.body;
    
    if( !nome || !cpf || !telefone || !email || !senha)
    {
        console.log("Todos os dados são obrigatórios");
    }
    else
    {
        cliente.create({
            matricula, 
            nome, 
            cpf, 
            telefone, 
            email, 
            senha,
            
            }).than(() =>{
                console.log("Cliente Cadastrado Com Sucesso!!");
                res.status(201).send("Cliente Cadastrado Com Sucesso!!");

            }).catch((err) => {
                console.error("Cliente não Cadastrado!".err);
                res.status(201).send("Erro de Cadastrado!!");
            })
        }
            
    });
    
    router.delete("/cliente", async(req, res) => {
        res.send("app Delete");
    
    });

module.exports = router;  // Exporta o roteador para uso em outros arquivos