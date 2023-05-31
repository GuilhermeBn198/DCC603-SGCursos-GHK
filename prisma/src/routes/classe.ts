import express, { RequestHandler } from "express";

import {
  createClass,
  listClasses,
  deleteClass,
} from "controllers/class.controller";

export default express
  .Router()
  .get("/", listClasses as RequestHandler)
  .post("/new", createClass)
  .delete("/delete/:id", deleteClass);
