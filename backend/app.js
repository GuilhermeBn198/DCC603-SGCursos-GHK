require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router");
// app.js
const config = require("./config/config.json");
const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        logging: dbConfig.options.logging,
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
