'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ordenes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ordenes.init({
    carritos_id: DataTypes.STRING,
    usuarios_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ordenes',
  });
  return ordenes;
};