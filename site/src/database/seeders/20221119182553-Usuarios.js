'use strict';

let listado = require ('../../data/Users.json')

let usuarios = listado.map(usuario =>{
let elemento = {

  nombre: usuario.nombre,
    apellido: usuario.apellido,
    genero: usuario.genero,
    email: usuario.email,
    password: usuario.contraseña,
    ciudad: usuario.ciudad,
    imagen: usuario.imagen,
   // rol: DataTypes.STRING,
    createdAt:new Date,
    updatedAt:new Date

/**  "id": 1,
  "nombre": "Cristian",
  "apellido": "Elias",
  "email": "cristiannicolas32@hotmail.com",
  "contraseña": "Comision17",
  "telefono": "584-570-7630",
  "ciudad": "Chenggang",
  "genero": "Masculino",
  "imagen": ".jpn",
  "rol": "Usuario" */

}
}



  
  )







///** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Marcas', marcas, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Marcas', null, {});

  }
};