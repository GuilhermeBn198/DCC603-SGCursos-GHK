import express, { RequestHandler } from "express";

import {
  createClass,
  listClasses,
  deleteClass,
  editClass
} from "controllers/class.controller";

export default express
  .Router()
  .get("/", listClasses as RequestHandler)
  .post("/new", createClass)
  .post("/:id/edit", editClass)
  .delete("/delete/:id", deleteClass);
