import express, { RequestHandler } from "express";

import {
  createClass,
  listClasses,
  deleteClass,
  editClass,
  generateCertificates
} from "controllers/class.controller";

export default express
  .Router()
  .get("/", listClasses as RequestHandler)
  .post("/new", createClass)
  .post("/:id/edit", editClass)
  .post("/:id/generate-certificates", generateCertificates)
  .delete("/delete/:id", deleteClass);
