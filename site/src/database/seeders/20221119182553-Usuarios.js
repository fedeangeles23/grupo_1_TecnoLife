'use strict';

let usuarios = [
{
  nombre: "Cristian",
  apellido: "Elias",
  email: "cristiannicolas32@hotmail.com",
  password: "Comision17",
ciudad: "Chenggang",
  genero: "Masculino",
  imagen: ".jpn",
  rol: "Usuario",
  createdAt : new Date,
  updatedAt : new Date
},

{
  nombre: "Jeanette",
  apellido: "Garcia",
  email: "Jeanettegarcia@hotmail.com",
  password: "Comision17",
  ciudad: "Lingcheng",
  genero: "Femenino",
  imagen: ".jpn",
  rol: "Usuario",
  createdAt : new Date,
  updatedAt : new Date
},
{
  nombre: "Federico",
  apellido:   "Angeles",
  email:  "Federicoangeles@hotmail.com",
  password:  "Comision17",
  ciudad:   "Mengxi",
  genero:   "Masculino",
  imagen: ".jpn",
  rol:   "Administrador",
  createdAt : new Date,
  updatedAt : new Date
},
{
  nombre: "Agustin",
  apellido:   "Sabando",
  email:  "agustinsabando@gmail.com",
  password:  "Comision17",
  ciudad:   "Shawnee Mission",
  genero:   "Masculino",
  imagen: ".jpn",
  rol:   "Administrador",
  createdAt : new Date,
  updatedAt : new Date
},
{
  nombre: "Martin",
  apellido:   "Avendaño",
  email:  "martinavendano2@gmail.com",
  password:  "Comision17",
  ciudad:   "Buzhakan",
  genero:   "Masculino",
  imagen: ".jpn",
  rol:   "Administrador",
  createdAt : new Date,
  updatedAt : new Date
},
{
  nombre: "Onofredo",
  apellido:   "Churchyard",
  email: "onofredochurchyard@gmail.com",
  password:  "Comision17",
  ciudad:   "Kayan",
  genero:   "Masculino",
  imagen: ".jpn",
  rol:   "Usuario",
  createdAt : new Date,
  updatedAt : new Date
},
{
  nombre: "Tyson",
  apellido:   "Hatch",
  email: "tysonhatch@gmail.com",
  password:  "Comision17",
  ciudad:  "Trondheim",
  genero:   "Masculino",
  imagen: ".jpn",
  rol:   "Usuario",
  createdAt : new Date,
  updatedAt : new Date
},

]

  module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Usuarios', usuarios, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});

  }
};
