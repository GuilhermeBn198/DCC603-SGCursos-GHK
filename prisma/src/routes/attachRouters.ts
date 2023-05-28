import signInRouter from 'routes/signin'
// import { serviceMiddleware, userMiddleware } from '@/middleware';

import express from 'express'

const routers = [{ '/signin': signInRouter }];

const middlewares: [] = [] //[serviceMiddleware.get, userMiddleware.get];

export function attachRouters(app: express.Application) {
  /**
   * products route está fora do loop abaixo para não
   * receber os middlewares. Na prática ela é uma rota pública
   */
  // app.use('/api/products', productsRouter);

  for (const routerObj of routers) {
    const [resource, router] = Object.entries(routerObj)[0];
    //.....👇🏻 /api/order
    app.use(`/api${resource}`, middlewares, router);
  }
}