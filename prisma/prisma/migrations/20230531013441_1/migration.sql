/*
  Warnings:

  - Added the required column `userId` to the `CompletedTask` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `CourseTasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CompletedTask" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CourseTasks" ADD COLUMN     "courseId" INTEGER NOT NULL,
ALTER COLUMN "description" SET DATA TYPE TEXT,
ALTER COLUMN "external_link" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "CourseTasks" ADD CONSTRAINT "CourseTasks_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedTask" ADD CONSTRAINT "CompletedTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
