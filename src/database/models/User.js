'use strict';
const { Model

} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Usuarios extends Model {

        static associate(models) {
            Usuarios.belongsTo(models.Roles, {
                as: 'rol',
                foreignKey: 'rolId'
            })
        }
    }
    Usuarios.init({
        nombre: DataTypes.STRING,
        apellido: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        imagen: DataTypes.STRING,
        rolId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Usuarios',
    });
    return Usuarios;
};