import express, { NextFunction } from 'express'

import jwt from 'jsonwebtoken'

import { prisma } from "app";

export const index = async (req: express.Request, res: express.Response, next: NextFunction) => {
  try {
    const { username, password } = req.body
    const data = await prisma.user.findFirst({ where: { username, password }, include: { role: {} } })

    if (!data?.username) return res.status(404).json({ data: null, errors: ['Usuário ou senha inválidas'] })

    const secretKey: string = process.env.SECRET_KEY!
    jwt.sign(data, secretKey, (err, jwt) => {
      if (err) {
        throw new Error('Erro ao gerar o JWT')
      }

      return res.status(200).json({ data: { ...data, jwt }, errors: [] });
    });
  } catch (error) {
    next(error)
  }
};