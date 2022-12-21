'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /* Usuarios.hasMany(models.Carritos, {
        as: 'carritos',
        foreignKey: 'usuarios_id'
      })
      Usuarios.hasMany(models.Ordenes, {
        as: 'ordenes',
        foreignKey: 'usuarios_id'
      }) */
    }
  }
  Usuarios.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    genero: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    imagen: DataTypes.STRING,
    rol: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Usuarios',
    timestamps: true
  });
  return Usuarios;
};