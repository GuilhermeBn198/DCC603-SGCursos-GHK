import { NextFunction, Request, Response } from "express";
import jwtService from 'jsonwebtoken'

const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const jwt = req.headers["authorization"]?.split(' ')[0] || '';
  const secretKey = process.env.SECRET_KEY;

  // Efetuando a validação do JWT:
  jwtService.verify(jwt, secretKey!, (err, userInfo) => {
    if (err) {
      res.status(403).end();
      return;
    }

    (req as any).user = userInfo;
    next();
  });
};

export default jwtMiddleware