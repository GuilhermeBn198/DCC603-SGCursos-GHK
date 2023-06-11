import express from "express";

import {
  listCourses,
  createCourse,
  deleteCourse,
  editCourse,
  createTask
} from "controllers/course.controller";

export default express
  .Router()
  .get("/", listCourses)
  .post("/new", createCourse)
  .post("/:id/task/new", createTask)
  .post("/:id/edit", editCourse)
  .delete("/delete/:id", deleteCourse);
