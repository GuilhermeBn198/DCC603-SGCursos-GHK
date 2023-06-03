import express, { NextFunction, Request } from "express";

import { prisma } from "app";

export const listClasses = async (
  req: Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const data = await prisma.class.findMany({
      include: { course: { include: { category: {}, tasks: {} } } },
    });
    const customData = await Promise.all(
      data.map(async (c) => {
        const enrolled = await prisma.enrollment.findFirst({
          where: { userId: req.user?.id, classId: c.id },
        });
        const test = { ...c, enrolled: !!enrolled };
        return test;
      })
    );

    return res.status(200).json({ data: customData, errors: [] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const createClass = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    // TODO: verificar se o curso existe
    const { courseId, start_date, end_date } = req.body;
    const data = await prisma.class.create({
      data: {
        start_date,
        end_date,
        course: { connect: { id: Number(courseId) } },
      },
    });
    return res.status(200).json({ data, errors: [] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteClass = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const courseId = req.params.id;
    const response = await prisma.class.delete({
      where: { id: Number(courseId) },
    });
    return res.status(200).json({ data: response, errors: [] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const editClass = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { start_date, end_date } = req.body;
    const data = await prisma.class.update({
      data: { start_date, end_date },
      where: { id: Number(id) },
    });
    return res.status(200).json({ data, errors: [] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
