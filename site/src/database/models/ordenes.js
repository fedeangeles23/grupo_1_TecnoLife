'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ordenes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ordenes.belongsTo(models.Carrito, {
        as: 'carrito',
        foreignKey: 'carritos_id'
      })
      Ordenes.belongsTo(models.Usuarios, {
        as: 'usuario',
        foreignKey: 'usuarios_id'
      })
    }
  }
  Ordenes.init({
    carritos_id: DataTypes.INTEGER,
    usuarios_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ordenes',
    timestamps: true
  });
  return Ordenes;
};