import express from "express";

import {
  listUsers,
  changeUserRole,
  suspenseUser,
} from "controllers/user.controller";

export default express
  .Router()
  .get("/", listUsers)
  .post("/:userId/edit", changeUserRole)
  .post("/:userId/suspense", suspenseUser);
