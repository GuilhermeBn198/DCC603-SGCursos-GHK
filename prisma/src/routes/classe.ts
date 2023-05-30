import express from "express";

import {
  createClass,
  listClasses,
  deleteClass,
} from "controllers/class.controller";

export default express
  .Router()
  .get("/", listClasses)
  .post("/new", createClass)
  .delete("/delete/:id", deleteClass);
