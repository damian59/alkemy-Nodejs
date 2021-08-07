const express= require("express");
const router = express.Router();

 const personajeRouter= require("./personaje");
const userRouter= require("./user");
 const peliculaRouter= require("./pelicula");

 
router.use("/personajes", personajeRouter);
router.use("/user", userRouter);
 router.use("/peliculas", peliculaRouter)

module.exports = router