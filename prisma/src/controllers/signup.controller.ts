import express, { NextFunction } from "express";

import { prisma } from "app";

export const index = async (req: express.Request, res: express.Response, next: NextFunction) => {
  try {
    const hasUsername = await prisma.user.findFirst({ where: { username: req.body.username } })

    if (hasUsername) return res.status(409).json({ data: null, errors: ['Usuário já existe'] })

    const data = await prisma.user.create({
      data: req.body
    });
    return res.status(200).json({ data, errors: [] });
  } catch (error) {
    next(error)
  }
};
