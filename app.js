require("dotenv").config();
const express = require("express");
const router = require("./routes/router");

// imports

app.use(express.json()); // JSON parsing

app.use(router);

const port = process.env.PORT || 3000;
const start = async () => {
    try {
        //   await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}; //initialize server
