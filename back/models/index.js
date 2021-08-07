const sequelize = require('sequelize')
const db = require ('../config/index')

const Personajes = require ('./Personajes')
const Peliculas = require ('./Peliculas')
const Genero = require('./Genero')
const User = require ('./User')


//  Personajes.hasMany(Peliculas)
 Peliculas.hasMany(Genero)
 Peliculas.belongsTo(Genero)
 Peliculas.hasMany(Personajes)


module.exports={Personajes, Peliculas, Genero, User}