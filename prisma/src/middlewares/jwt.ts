import { NextFunction, Request, Response } from "express";

import jwtService from 'jsonwebtoken'

import { User } from "types";

const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const jwt = req.headers["authorization"]?.replace('Bearer', '').trim();
  const secretKey = process.env.SECRET_KEY;
  // Efetuando a validação do JWT:
  if (jwt === undefined) { res.status(403).end(); return }
  jwtService.verify(jwt, secretKey!, (err, userInfo) => {
    if (err) {
      res.status(403).end();
      return;
    }
    req.user = userInfo as User
    next();
  });
};

export default jwtMiddleware