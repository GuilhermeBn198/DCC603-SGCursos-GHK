import express, { NextFunction } from "express";
import md5 from 'md5'
import { prisma } from "app";

export const index = async (req: express.Request, res: express.Response, next: NextFunction) => {
  try {
    const hasUsername = await prisma.user.findFirst({ where: { username: req.body.username } })

    if (hasUsername) return res.status(409).json({ data: null, errors: ['Usuário já existe'] })

    const md5Email = md5(req.body.mail)

    const newUser = req.body
    const data = await prisma.user.create({
      data: { ...newUser, photo: `https://www.gravatar.com/avatar/${md5Email}` }
    });
    return res.status(200).json({ data, errors: [] });
  } catch (error) {
    console.log(error)
    next(error)
  }
};
