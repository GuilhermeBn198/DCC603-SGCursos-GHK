import express from "express";

import {
  listEnrollments,
  createEnrollment,
  deleteEnrollment,
} from "controllers/enrollment.controller";

export default express
  .Router()
  .get("/", listEnrollments)
  .post("/new", createEnrollment)
  .delete("/delete/:id", deleteEnrollment);
