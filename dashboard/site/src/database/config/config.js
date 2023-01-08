require('dotenv').config()
module.exports ={
  "development": {
    username: process.env.DB_USERNAME, // ← Contraseña del usuario de la DB
    password: process.env.DB_PASS, // ← Contraseña del usuario de la DB
    database: process.env.DB_DATABASE, // ← Nombre de la DB previamente creada
    host: process.env.DB_PORT, // por el momento utilizamos 127.0.0.1
    dialect: 'mysql'
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
