import express, { NextFunction } from "express";

import { prisma } from "app";

export const listTaskByUser = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const { userId, courseId } = req.body;
    const courseTasks = await prisma.courseTask.findMany({
      where: { courseId: Number(courseId) },
    });
    const completedTasks = await prisma.completedTask.findMany({
      where: { userId },
    });

    const customCourseTasks = courseTasks.map((task) => {
      const completed = completedTasks.find(
        (t) => t.courseTasksId === task.id && t.completed
      );
      return { ...task, completedTaskId: completed?.id, completed: completed?.completed };
    });
    return res.status(200).json({ data: customCourseTasks, errors: [] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const changeCompletedTaskStatus = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const { completedTaskId, courseTaskId, completed, userId } = req.body;
    console.log(completedTaskId, courseTaskId, completed, userId)
    let result = {};
    if (completed) {
      result = await prisma.completedTask.create({
        data: {
          completed: true,
          courseTasks: { connect: { id: Number(courseTaskId) } },
          user: { connect: { id: Number(userId) } },
        },
      });
    } else {
      result = await prisma.completedTask.delete({ where: { id: Number(completedTaskId) } })
    }

    return res.status(200).json({ data: result, errors: [] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
