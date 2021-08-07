const { Sequelize, Model } = require("sequelize")
const db = require("../config");

class Genero extends Model { }

Genero.init({
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    imagen: {
        type: Sequelize.STRING,
    },
   
    calificacion: {
        type: Sequelize.INTEGER,

    },

}, { sequelize: db, modelName: 'genero' });

 module.exports= Genero