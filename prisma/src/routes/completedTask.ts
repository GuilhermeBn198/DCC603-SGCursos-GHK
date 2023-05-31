import express from "express";

import { listTaskByUser, changeCompletedTaskStatus } from "controllers/completedTask.controller";

export default express
  .Router().post('/', listTaskByUser).post('/edit', changeCompletedTaskStatus)
