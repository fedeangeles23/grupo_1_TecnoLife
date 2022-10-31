'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuarios.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    genero: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    imagen: DataTypes.STRING,
    rol: DataTypes.STRING,
    carritos_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};