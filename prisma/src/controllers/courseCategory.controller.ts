import express, { NextFunction } from "express";

import { prisma } from "app";

export const listCategories = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const data = await prisma.courseCategory.findMany()
    return res.status(200).json({ data, errors: [] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const createCategory = async (req: express.Request, res: express.Response, next: NextFunction) => {
  try {
    const newCategory = req.body
    const data = await prisma.courseCategory.create({
      data: { ...newCategory }
    })
    return res.status(200).json({ data, errors: [] });
  } catch (error) {
    console.log(error)
    next(error)
  }
};

export const deleteCategory = async (req: express.Request, res: express.Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const data = await prisma.courseCategory.delete({ where: { id: Number(id) } })
    return res.status(200).json({ data, errors: [] });
  } catch (error) {
    console.log(error)
    next(error)
  }
};