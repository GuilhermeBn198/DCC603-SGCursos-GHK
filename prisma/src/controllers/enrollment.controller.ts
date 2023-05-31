import express, { NextFunction } from "express";

import { prisma } from "app";

export const listEnrollments = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const data = await prisma.enrollment.findMany();
    return res.status(200).json({ data, errors: [] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const createEnrollment = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const { classId, userId } = req.body;
    const data = await prisma.enrollment.create({
      data: { class: { connect: { id: Number(classId) } }, user: { connect: { id: Number(userId) } } },
    });
    return res.status(200).json({ data, errors: [] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteEnrollment = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = await prisma.enrollment.delete({ where: { id: Number(id) } })
    return res.status(200).json({ data, errors: [] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
