import { prisma } from "app";
import express from "express";

export const index = async (req: express.Request, res: express.Response) => {
  try {
    const resp = await prisma.user.create({
      data: req.body
    });
    return res.status(200).json(resp);
  } catch (err) {
    console.error('Falha ao criar usuário', err)
    res.status(500)
  }
};
