let Sequelize = require("sequelize");

let connection = require("../config/connection.js");

let Product = connection.define("product", {
    customerId: Sequelize.INTEGER,
    sellerId: Sequelize.INTEGER,
    name: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        min: 0.00
    },
    quantity: Sequelize.INTEGER,
    review:{
        type: Sequelize.INTEGER,
        min: 0,
        max: 5
    } 
});

Product.sync();

module.exports = Product;