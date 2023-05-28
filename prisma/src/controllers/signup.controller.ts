import express from "express";

import { prisma } from "app";

export const index = async (req: express.Request, res: express.Response) => {
  try {
    const data = await prisma.user.create({
      data: req.body
    });
    return res.status(200).json({ data, errors: [] });
  } catch (err) {
    res.status(500).json({ data: null, errors: ['Falha no servidor'] })
  }
};
