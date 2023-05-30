import express from "express";

import {
  createClass,
  listClasses,
  deleteClass,
} from "controllers/classes.controller";

export default express
  .Router()
  .get("/", listClasses)
  .post("/new", createClass)
  .delete("/delete/:id", deleteClass);
