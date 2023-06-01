import express from "express";

import { listUsers, changeUserRole } from "controllers/user.controller";

export default express.Router().get("/", listUsers).post('/:userId/edit', changeUserRole)
