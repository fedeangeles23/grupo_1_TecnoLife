'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorias extends Model {

    static associate(models) {
      Categorias.hasMany(models.Productos,{
        as: 'productos',
        foreignKey: 'categoriasId'
      })
    }
  }
  Categorias.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categorias',
  });
  return Categorias;
};