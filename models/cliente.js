const cliente = (sequelize, DataTypes) => {
  return sequelize.define('t_clientes', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

}

module.exports = cliente;