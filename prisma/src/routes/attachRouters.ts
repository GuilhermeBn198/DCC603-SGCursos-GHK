import userRouter from "routes/user";
import signInRouter from "routes/signin";
import signUpRouter from "routes/signup";
import courseRouter from "routes/course";
import classeRouter from "routes/classe";
import courseTaskRouter from "routes/courseTask";
import enrollmentRouter from "routes/enrollment";
import completedTaskRouter from "routes/completedTask";
import courseCategoryRouter from "routes/courseCategory";

import jwtMiddleware from "middlewares/jwt";

import express from "express";

const routers = [
  { "/courses/completedTasks": completedTaskRouter },
  { "/users": userRouter },
  { "/courses": courseRouter },
  { "/classes": classeRouter },
  { "/enrollments": enrollmentRouter },
  { "/courses/tasks": courseTaskRouter },
  { "/courses/categories": courseCategoryRouter },
];

const middlewares = [jwtMiddleware];

export function attachRouters(app: express.Application) {
  /**
   * signin route está fora do loop abaixo para não
   * receber os middlewares. Na prática ela é uma rota pública
   */
  app.use("/api/signin", signInRouter);
  app.use("/api/signup", signUpRouter);

  for (const routerObj of routers) {
    const [resource, router] = Object.entries(routerObj)[0];
    app.use(`/api${resource}`, middlewares, router);
  }
}
