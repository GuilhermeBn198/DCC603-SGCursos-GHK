import express, { NextFunction } from "express";

import { prisma } from "app";

export const createTask = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const courseId = req.body.courseId;
    const data = await prisma.courseTask.create({
      data: { course: { connect: { id: Number(courseId) } }, ...req.body.task },
    });
    return res.status(200).json({ data, errors: [] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
