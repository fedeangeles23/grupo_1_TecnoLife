'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Productos.belongsTo(models.Categorias, {
        as: 'categoria',
        foreignKey: 'categorias_id'
      })
      Productos.belongsTo(models.Marcas, {
        as: 'marca',
        foreignKey: 'marcas_id'
      })
      Productos.hasMany(models.Imagenes, {
        as: 'imagenes',
        foreignKey: 'producto_id'
      })
      /* Productos.hasMany(models.Carritos, {
        as: 'carritos',
        foreignKey: 'productos_id'
      }) */
    }
  }
  Productos.init({
    nombre: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    descuento: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    categorias_id: DataTypes.INTEGER,
    marcas_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Productos',
    timestamps: true
  });
  return Productos;
};