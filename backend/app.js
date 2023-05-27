require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router");
// app.js
const { Sequelize } = require("sequelize");
const db = require("./db");

const sequelize = new Sequelize(
    db.Sequelize,
    db.sequelize.config.database,
    db.sequelize.config.username,
    db.sequelize.config.password,
    {
        host: db.sequelize.config.host,
        dialect: db.sequelize.associate(db.sequelize.of(db.Sequelize)).dialect,
    }
);

app.use(express.json()); // JSON parsing

app.use(router);

const port = process.env.PORT || 3000;
const start = async () => {
    try {
        await sequelize.authenticate(); // Connect to the database
        console.log("Connection has been established successfully.");
        app.listen(port, console.log(`server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}; //initialize server

start();
