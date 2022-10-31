'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carrito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  carrito.init({
    productos_id: DataTypes.STRING,
    usuarios_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'carrito',
  });
  return carrito;
};