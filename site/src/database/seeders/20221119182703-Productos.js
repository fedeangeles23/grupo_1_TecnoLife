'use strict';

let productos = [
{
  nombre: "HP",
  stock:5,
  precio:100000,
  descuento:10,
  descripcion: "balato balato",
  categorias_id:"1",
  marcas_id:"1",
  createdAt:new Date,
  updatedAt:new Date
},
{
  nombre: "Samsung",
  stock:5,
  precio:100000,
  descuento:0,
  descripcion: "Compralo pibe",
  categorias_id:"1",
  marcas_id:"1",
  createdAt:new Date,
  updatedAt:new Date
},

]


  module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Productos', productos, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Productos', null, {});

  }
};
