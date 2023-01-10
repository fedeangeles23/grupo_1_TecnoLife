'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carritos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Carritos.init({
    productos_id: DataTypes.INTEGER,
    usuarios_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carritos',
    timestamps: true
  });
  return Carritos;
};