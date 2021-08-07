const Sequelize = require ('sequelize')
const db = new Sequelize("postgres://localhost:5432/dysney",
{ logging:false});

module.exports= db