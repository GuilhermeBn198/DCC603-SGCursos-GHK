import signInRouter from 'routes/signin'
import signUpRouter from 'routes/signup'

import jwtMiddleware from 'middlewares/jwt';

import express from 'express'

const routers = [{ '/none': signUpRouter }];

const middlewares = [jwtMiddleware]

export function attachRouters(app: express.Application) {
  /**
   * signin route está fora do loop abaixo para não
   * receber os middlewares. Na prática ela é uma rota pública
   */
  app.use('/api/signin', signInRouter);
  app.use('/api/signup', signUpRouter);

  for (const routerObj of routers) {
    const [resource, router] = Object.entries(routerObj)[0];
    app.use(`/api${resource}`, middlewares, router);
  }
}