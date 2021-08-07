const express = require('express');
const app = express();
const helmet = require("helmet");
const morgan = require("morgan")
const bodyParser = require('body-parser')

const db = require('./config/index')
const routes = require("./routes/index")


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(helmet());


app.use("/api",routes)

app.use(function(err,req,res,next){
    console.error(err)
    res.status(500).send(err)
  })

db.sync({ force:false }).then(() => {
    console.log("concetada a la base de datos");
    app.listen(3001);
    console.log("Servidor escuchado en el puerto 3001");
});