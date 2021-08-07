const express = require("express");
const router = express.Router()
const jwt = require("jsonwebtoken")
const { User } = require('../models/index')
const bcrypt= require('bcrypt')
 const authConfig = require('../config/auth')
 const checkJWT= require("./middlewares/jwt")
 
router.post("/register", (req, res, next) => {

    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

    // Crear un usuario
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: password
    }).then(user => {

        // Creamos el token
        let token = jwt.sign({ user: user }, authConfig.secret, {
            expiresIn: authConfig.expires
        });

        res.json({
            user: user,
            token: token
        });

    }).catch(next);

});

router.post('/login', (req, res,next) => {

      let { email, password } = req.body;

        
        User.findOne({
            where: {
                email: email
            }
        }).then(user => {

            if (!user) {
                res.status(404).json({ msg: "Usuario con este correo no encontrado" });
            } else {

                if (bcrypt.compareSync(password, user.password)) {

                   
                    let token = jwt.sign({ user: user }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });

                    res.json({
                        user: user,
                        token: token
                    })

                } else {

                    // Unauthorized Access
                    res.status(401).json({ msg: "Contraseña incorrecta" })
                }

            }

        }).catch (error =>{
            next (error)
        })

})


module.exports = router