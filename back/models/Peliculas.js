const { Sequelize, Model } = require("sequelize")
const db = require("../config");

class Peliculas extends Model { }

Peliculas.init({
    imagen: {
        type: Sequelize.STRING,
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    fechaDeCreacion: {
        type: Sequelize.DATE,

    },
    calificacion: {
        type: Sequelize.INTEGER,

    },

}, { sequelize: db, modelName: 'pelicula' });

module.exports= Peliculas