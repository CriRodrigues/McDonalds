const {DataTypes} = require('sequelize');
const sequilize = require('./models/conexaoBanco');

const cliente = sequilize.define('cliente', {
  
    nome:{
        type:DataTypes.STRING,
        allowNull: false,
    }, 
    cpf:{
        type:DataTypes.STRING,
        allowNull: false,
    }, 
    telefne:{
        type:DataTypes.STRING,
        allowNull: false,
    },  
    email:{
        type:DataTypes.STRING,
        allowNull: false,
    } 
});

module.exports = cliente;