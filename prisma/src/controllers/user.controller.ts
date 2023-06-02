import express, { NextFunction, Request } from "express";

import { prisma } from "app";

export const listUsers = async (
  req: Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const data = await prisma.user.findMany({ include: { role: {} } });
    return res.status(200).json({ data, errors: [] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const editUser = async (
  req: Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const { roleId, user } = req.body;
    let updateData
    if (roleId) {
      updateData = { ...user, role: { connect: { id: Number(roleId) } } }
    } else {
      updateData = { ...user }
    }

    const data = await prisma.user.update({
      data: updateData,
      where: { id: Number(userId) },
    });
    return res.status(200).json({ data, errors: [] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const suspenseUser = async (
  req: Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const { suspended } = req.body;

    const data = await prisma.user.update({
      data: { suspended },
      where: { id: Number(userId) },
    });
    return res.status(200).json({ data, errors: [] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
