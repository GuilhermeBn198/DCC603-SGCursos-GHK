const express = require("express");
const router = express.Router();
const { User } = require("./models"); // Assuming you have a models/index.js file exporting your models

router.get("/users", async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
