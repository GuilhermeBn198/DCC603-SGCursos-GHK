import express from "express";

import {
  listCategories,
  createCategory,
  deleteCategory
} from "controllers/courseCategory.controller";

export default express
  .Router()
  .get("/", listCategories)
  .post("/new", createCategory)
  .delete("/delete/:id", deleteCategory);
