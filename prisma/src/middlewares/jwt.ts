import { NextFunction, Request, Response } from "express";

import jwtService from 'jsonwebtoken'

import { User } from "types";

const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const jwt = req.headers["authorization"]?.split(' ')[1] || '';
  const secretKey = process.env.SECRET_KEY;
  // Efetuando a validação do JWT:
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