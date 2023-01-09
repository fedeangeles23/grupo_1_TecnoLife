'use strict';
let listado = require('../../data/productos.json')
let productos = []

listado.forEach(producto => {
  let item = {
    nombre: producto.nombre,
    stock: producto.stock,
    precio: producto.precio,
    descuento: producto.descuento,
    descripcion: producto.descripcion,
    categorias_id: producto.categorias_id,
    marcas_id: producto.marcas_id,
    createdAt: new Date,
    updatedAt: new Date
  }
  productos.push(item)
})


module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Productos', productos, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Productos', null, {});

  }
};
