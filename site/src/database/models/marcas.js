'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Marcas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Marcas.hasMany(models.Productos, {
        as: 'productos',
        foreignKey: 'marcas_id'
      })
    }
  }
  Marcas.init({
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Marcas',
    timestamps: true
  });
  return Marcas;
};