const express = require("express");
const router = express.Router()
const { Personajes } = require('../models/index')
const { Op } = require("sequelize");

router.get("/characters?name=nombre", (req, res) => {
    Personajes.findOne({
        where: {

            nombre: {
                [Op.substring]: req.params.nombre
            }
        }
    })
        .then(propiedades => {
            res.send(propiedades)
        })
        .catch (error =>{
            next (error)
        })
});

router.get("/characters?age=edad", (req, res) => {
    Personajes.findOne({
        where: {

            edad: {
                [Op.substring]: req.params.nombre
            }
        }
    })
        .then(propiedades => {
            res.send(propiedades)
        })
        .catch (error =>{
            next (error)
        })
});

router.get("/characters?movie=idPelicula", (req, res) => {
    Personajes.findOne({
        where: {

            pelicula: {
                [Op.substring]: req.params.idPelicula
            }
        }
    })
        .then(propiedades => {
            res.send(propiedades)
        })
        .catch (error =>{
            next (error)
        })
});

router.get("/characters", (req, res) => {
    Personajes.findAll({
        where: {
            imagen,
            nombre
        }
    })
        .then(propiedades => {
            res.send(propiedades)
        })
        .catch (error =>{
            next (error)
        })

});

router.post("/characters/add", (req, res) => {
    console.log("ACA ESTA EL BODY", req.body)
    Personajes.create(req.body)
        .then(personaje => {
            res.send(personaje)
        })
        .catch (error =>{
            next (error)
        })
})

router.put("/characters/:id", (req, res) => {

    let id = req.params.id;
    console.log(req.body)
    Personajes.findByPk(id)
        .then(data => {
            // console.log("DATAAAAAAA", data)
            !data ? res.sendStatus(404) :
                data.update(req.body)
                    .then(data => res.send(data))
        })
        .catch (error =>{
            next (error)
        })
})

router.delete("/characters/:id", (req, res) => {
    Personajes.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.send("Propieda borrada")
        })
        .catch (error =>{
            next (error)
        })
})

module.exports = router