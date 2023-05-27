require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router");
const { Sequelize } = require("sequelize");

// Initialize Sequelize
const sequelize = new Sequelize(process.env.DATABASE_URL);

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
