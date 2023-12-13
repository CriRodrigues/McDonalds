const {Router} = require('express');
const {cliente}  = require('../models');
const router = express.Router();

router.get('/', async (req, res) =>{
const cliente = await t_clientes.findAll();
res.status(200).json(cliente);
});

router.get('/:matricula', async (req, res) =>{
    const cliente = await t_clientes.findByPK(req.params.matricula);
    res.status(200).json(cliente);
});

router.post('/cadastro', async(req, res) => {
   const { nome,cpf,email,senha } = req.body;
   const novo_cliente = t_clientes.create({nome,cpf,email,senha});
   
   res.status(200).json({ message:'Cadastrado com sucesso'});

});

module.exports = router;  