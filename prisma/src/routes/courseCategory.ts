import express from "express";

import {
  listCategories,
  createCategory,
  editCategory,
  deleteCategory
} from "controllers/courseCategory.controller";

export default express
  .Router()
  .get("/", listCategories)
  .post("/new", createCategory)
  .post('/edit/:id', editCategory)
  .delete("/delete/:id", deleteCategory);
