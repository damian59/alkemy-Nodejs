const { Sequelize, Model } = require("sequelize")
const db = require("../config");
const bcrypt = require("bcrypt");

class User extends Model {}

User.init(
    {
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: { isEmail: true }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: { notEmpty: true },
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },
    { sequelize: db, modelName: "user" }
);

// User.beforeCreate((user) => {
//     return bcrypt
//         .genSalt(16)
//         .then((salt) => {
//             return bcrypt.hash(user.password, salt);
//         })
//         .then((hash) => {
//             user.password = hash;
//         });
// });

// User.prototype.validPassword = function(passwordEnLogin){
    
//    return bcrypt.compare(passwordEnLogin,this.password) //estamos comparando
//   }


module.exports = User