import express, { NextFunction } from "express";

import { prisma } from "app";

export const listCertificatesByUser = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const data = await prisma.certificate.findMany({
      where: { user: { id: Number(userId) } }, include: { class: { include: { course: {} } } }
    });
    return res.status(200).json({ data, errors: [] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
