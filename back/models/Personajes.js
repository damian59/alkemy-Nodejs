const { Sequelize, Model } = require("sequelize")
const db = require("../config");

class Personaje extends Model { }

Personaje.init({
    imagen: {
        type: Sequelize.STRING,
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    edad: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    peso: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    historia: {
        type: Sequelize.TEXT,

    },
    peliculas:{
        type: Sequelize.STRING
    }

}, { sequelize: db, modelName: 'personaje' }); 


module.exports= Personaje