import express from "express";

import {
  listCourses,
  createCourse,
  deleteCourse,
} from "controllers/course.controller";

export default express
  .Router()
  .get("/", listCourses)
  .post("/new", createCourse)
  .delete("/delete/:id", deleteCourse);
