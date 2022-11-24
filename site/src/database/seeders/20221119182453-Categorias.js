'use strict';
let listado = ['Notebooks','Tablets','Auriculares','Televisores']

let categorias = listado.map(categoria =>{
let elemento = {
  name: categoria,
  createdAt: new Date,
  updatedAt: new Date,

}
return elemento
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Categorias', categorias, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categorias', null, {});

  }
};
