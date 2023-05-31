/*
  Warnings:

  - You are about to drop the `CourseTasks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CompletedTask" DROP CONSTRAINT "CompletedTask_courseTasksId_fkey";

-- DropForeignKey
ALTER TABLE "CourseTasks" DROP CONSTRAINT "CourseTasks_courseId_fkey";

-- DropTable
DROP TABLE "CourseTasks";

-- CreateTable
CREATE TABLE "CourseTask" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "external_link" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "CourseTask_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CourseTask" ADD CONSTRAINT "CourseTask_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedTask" ADD CONSTRAINT "CompletedTask_courseTasksId_fkey" FOREIGN KEY ("courseTasksId") REFERENCES "CourseTask"("id") ON DELETE SET NULL ON UPDATE CASCADE;
