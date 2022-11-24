'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Carrito.belongsTo(models.Productos, {
        as: 'producto',
        foreignKey: 'productos_id'
      })
      Carrito.belongsTo(models.Usuarios, {
        as: 'usuario',
        foreignKey: 'usuarios_id'
      })
      Carrito.hasMany(models.Ordenes, {
        as: 'ordenes',
        foreignKey: 'carritos_id'
      })
    }
  }
  Carrito.init({
    productos_id: DataTypes.INTEGER,
    usuarios_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carrito',
    timestamps: true
  });
  return Carrito;
};