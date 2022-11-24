'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Categorias.hasMany(models.Productos, {
        as: 'productos',
        foreignKey: 'categorias_id'
      })
    }
  }
  Categorias.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categorias',
    timestamps: true
  });
  return Categorias;
};