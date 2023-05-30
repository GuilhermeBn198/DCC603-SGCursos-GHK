import express, { NextFunction } from "express";

import { prisma } from "app";

export const listCourses = async (req: express.Request, res: express.Response, next: NextFunction) => {
  try {
    const data = await prisma.course.findMany()
    return res.status(200).json({ data, errors: [] });
  } catch (error) {
    console.log(error)
    next(error)
  }
};

export const createCourse = async (req: express.Request, res: express.Response, next: NextFunction) => {
  try {
    const newCourse = req.body.course
    const data = await prisma.course.create({
      data: { category: { connect: { id: req.body.categoryId } }, ...newCourse }
    })
    return res.status(200).json({ data, errors: [] });
  } catch (error) {
    console.log(error)
    next(error)
  }
};

export const deleteCourse = async (req: express.Request, res: express.Response, next: NextFunction) => {
  try {
    // TODO: Verificar se o curso existe
    const courseId = (req.params.id)
    const response = await prisma.course.delete({ where: { id: Number(courseId) } })
    return res.status(200).json({ data: response, errors: [] });
  } catch (error) {
    console.log(error)
    next(error)
  }
};
