/*
  Warnings:

  - You are about to drop the column `userRoles` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Todo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Certificate" DROP CONSTRAINT "Certificate_userCertificate_fkey";

-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_teacher_fkey";

-- DropForeignKey
ALTER TABLE "CompletedTask" DROP CONSTRAINT "CompletedTask_userCompletedtask_fkey";

-- DropForeignKey
ALTER TABLE "Enrollment" DROP CONSTRAINT "Enrollment_userEnrollment_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userRoles_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userRoles",
ALTER COLUMN "phone" SET DATA TYPE VARCHAR(255);

-- DropTable
DROP TABLE "Todo";
