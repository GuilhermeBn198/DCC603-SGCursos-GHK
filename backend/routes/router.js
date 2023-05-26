const express = require("express");
const { PrismaClient } = require("@prisma/client");
const router = express.Router();
const prisma = new PrismaClient();

// imports

router.get("/users", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

module.exports = router;
