import express from "express";

import {
  listUsers,
  editUser,
  suspenseUser,
} from "controllers/user.controller";

export default express
  .Router()
  .get("/", listUsers)
  .post("/:userId/edit", editUser)
  .post("/:userId/suspense", suspenseUser);
