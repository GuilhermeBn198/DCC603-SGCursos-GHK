import express from "express";

import {
  listCourses,
  createCourse,
  deleteCourse,
  editCourse
} from "controllers/course.controller";

export default express
  .Router()
  .get("/", listCourses)
  .post("/new", createCourse)
  .post("/:id/edit", editCourse)
  .delete("/delete/:id", deleteCourse);
