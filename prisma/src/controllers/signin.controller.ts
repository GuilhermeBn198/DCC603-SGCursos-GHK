import express from 'express'

import jwt from 'jsonwebtoken'

import { prisma } from "app";

export const index = async (req: express.Request, res: express.Response) => {
  try {
    const { username, password } = req.body
    const data = await prisma.user.findFirst({ where: { username, password } })

    if (!data?.username) return res.status(404).json({ data: null, errors: ['Usuário ou senha inválidas'] })

    const secretKey: string = process.env.SECRET_KEY!
    jwt.sign(data, secretKey, (err, jwt) => {
      if (err) {
        res
          .status(500)
          .json({ errors: ["Erro ao gerar o JWT"] });
        return;
      }

      return res.status(200).json({ data: { ...data, jwt }, errors: [] });
    });
  } catch (err) {
    console.error(err)
    res.status(500).json({ data: null, errors: ['Falha no servidor'] })
  }
};