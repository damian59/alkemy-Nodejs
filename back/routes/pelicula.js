const express = require("express")
const router = express.Router()

const {Peliculas, Personajes}  = require("../models/index")

router.get("/movies?name=nombre", (req, res) => {
    Peliculas.findOne({
        where: {

            nombre: {
                [Op.substring]: req.params.nombre
            }
        }
    })
        .then(pelicula => {
            res.send(pelicula )
        })
        .catch(err => console.log(err))
});

router.get("/movies?genre=idgenero", (req, res) => {
    Peliculas.findOne({
        where: {

            genero: {
                [Op.substring]: req.params.genero
            }
        }
    })
        .then(genero => {
            res.send(genero)
        })
        .catch(err => console.log(err))
});

router.get("/movies?order=ASC | DESC", (req, res) => {
    Peliculas.findOne({
        where: {

            order: [
                ['id', 'DESC'],
                ['name', 'ASC'],
            ],
        }
    })
        .then(order => {
            res.send(order)
        })
        .catch(err => console.log(err))
});

router.get("/", (req, res) => {
    Peliculas.findAll({
        where: {
            imagen,
            titulo,
            fechaDeCracion
        }, Include: Personajes
    })
        .then(propiedades => {
            res.send(propiedades)
        })
        .catch(err => console.log(err))

});

router.post("/add", (req, res) => {
    
    Peliculas.create(req.body)
        .then(pelicula => {
            res.send(pelicula)
        })

})

router.put("/:id", (req, res) => {

    let id = req.params.id;
   
    Peliculas.findByPk(id)
        .then(data => {
            
            !data ? res.sendStatus(404) :
                data.update(req.body)
                    .then(data => res.send(data))
        })
        .catch(error => {
            console.log(error)
        })
})

router.delete("/:id", (req, res) => {
    Peliculas.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.send("Pelucila borrada")
        })
})

module.exports = router