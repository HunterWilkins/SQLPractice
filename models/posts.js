let Sequelize = require("sequelize");

let connection = require("../config/connection.js");

let Post = connection.define("post", {
    author: Sequelize.STRING,
    title: Sequelize.STRING,
    body: Sequelize.TEXT
});

Post.sync();

module.exports = Post;