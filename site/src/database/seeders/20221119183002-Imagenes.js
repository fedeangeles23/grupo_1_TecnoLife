'use strict';
let listado = require('../../data/productos.json')
let imagenes = []

listado.forEach(producto => {
  let imagen = {
    nombre: producto.imagenes[0],
    producto_id: producto.id,
    createdAt:new Date,
    updatedAt:new Date
  }
  let imagen2 = {
    nombre: producto.imagenes[1],
    producto_id: producto.id,
    createdAt:new Date,
    updatedAt:new Date
  }
  let imagen3 = {
    nombre: producto.imagenes[2],
    producto_id: producto.id,
    createdAt:new Date,
    updatedAt:new Date
  }
  let imagen4 = {
    nombre: producto.imagenes[3],
    producto_id: producto.id,
    createdAt:new Date,
    updatedAt:new Date
  }
  imagenes.push(imagen,imagen2,imagen3,imagen4)
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Imagenes', imagenes, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Imagenes', null, {});
  }
};