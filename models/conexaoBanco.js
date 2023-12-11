const Sequelize = require('sequelize');

const sequelize = new Sequelize("McDonalds","beellzzebuth","123poi",{
  host: 'localhost',
  dialect: 'mariadb'
});

sequelize.authenticate().then(()=>{
        console.log("Banco conectado com sucesso");
}      ).catch(function(){
        console.log("Erro!! Falha de conexão!!");
});

module.exports = sequelize;