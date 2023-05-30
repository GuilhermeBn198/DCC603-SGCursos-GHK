/*
  Warnings:

  - You are about to drop the column `classId` on the `Certificate` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Certificate` table. All the data in the column will be lost.
  - You are about to drop the column `CourseTasksId` on the `CompletedTask` table. All the data in the column will be lost.
  - You are about to drop the column `userCompletedtaskId` on the `CompletedTask` table. All the data in the column will be lost.
  - You are about to drop the column `CourseStatusId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `CompletedTaskId` on the `CourseTasks` table. All the data in the column will be lost.
  - You are about to drop the column `CourseId` on the `CourseTasks` table. All the data in the column will be lost.
  - You are about to drop the column `classId` on the `Enrollment` table. All the data in the column will be lost.
  - You are about to drop the column `userEnrollmentId` on the `Enrollment` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `completed` on the `CompletedTask` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Certificate" DROP CONSTRAINT "Certificate_classId_fkey";

-- DropForeignKey
ALTER TABLE "Certificate" DROP CONSTRAINT "Certificate_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Certificate" DROP CONSTRAINT "Certificate_userId_fkey";

-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_courseId_fkey";

-- DropForeignKey
ALTER TABLE "CompletedTask" DROP CONSTRAINT "CompletedTask_CourseTasksId_fkey";

-- DropForeignKey
ALTER TABLE "CompletedTask" DROP CONSTRAINT "CompletedTask_userCompletedtaskId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_CourseStatusId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CourseTasks" DROP CONSTRAINT "CourseTasks_CourseId_fkey";

-- DropForeignKey
ALTER TABLE "Enrollment" DROP CONSTRAINT "Enrollment_classId_fkey";

-- DropForeignKey
ALTER TABLE "Enrollment" DROP CONSTRAINT "Enrollment_userEnrollmentId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- DropIndex
DROP INDEX "Certificate_userId_key";

-- DropIndex
DROP INDEX "CompletedTask_CourseTasksId_key";

-- DropIndex
DROP INDEX "Enrollment_classId_key";

-- DropIndex
DROP INDEX "Enrollment_userEnrollmentId_key";

-- AlterTable
ALTER TABLE "Certificate" DROP COLUMN "classId",
DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "CompletedTask" DROP COLUMN "CourseTasksId",
DROP COLUMN "userCompletedtaskId",
DROP COLUMN "completed",
ADD COLUMN     "completed" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "CourseStatusId",
DROP COLUMN "categoryId";

-- AlterTable
ALTER TABLE "CourseTasks" DROP COLUMN "CompletedTaskId",
DROP COLUMN "CourseId";

-- AlterTable
ALTER TABLE "Enrollment" DROP COLUMN "classId",
DROP COLUMN "userEnrollmentId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "roleId";

-- DropTable
DROP TABLE "Role";
