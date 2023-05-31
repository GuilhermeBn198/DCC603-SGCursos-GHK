import express from "express";

import { createTask } from "controllers/courseTask.controller";

export default express
  .Router()
  .post("/new", createTask)
