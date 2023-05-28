/*
  Warnings:

  - You are about to drop the `Badge` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Certificate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Class` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CompletedTask` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CourseCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CourseStatus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CourseTask` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Enrollment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Permission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserBadge` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Certificate" DROP CONSTRAINT "Certificate_classCertificate_fkey";

-- DropForeignKey
ALTER TABLE "Certificate" DROP CONSTRAINT "Certificate_courseCertificate_fkey";

-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_courseClass_fkey";

-- DropForeignKey
ALTER TABLE "CompletedTask" DROP CONSTRAINT "CompletedTask_completedtaskId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_badgesCourse_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_categoryCourse_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_statusCourse_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_tasksCourse_fkey";

-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_userpermissions_fkey";

-- DropForeignKey
ALTER TABLE "UserBadge" DROP CONSTRAINT "UserBadge_badgeId_fkey";

-- DropTable
DROP TABLE "Badge";

-- DropTable
DROP TABLE "Certificate";

-- DropTable
DROP TABLE "Class";

-- DropTable
DROP TABLE "CompletedTask";

-- DropTable
DROP TABLE "Course";

-- DropTable
DROP TABLE "CourseCategory";

-- DropTable
DROP TABLE "CourseStatus";

-- DropTable
DROP TABLE "CourseTask";

-- DropTable
DROP TABLE "Enrollment";

-- DropTable
DROP TABLE "Permission";

-- DropTable
DROP TABLE "Role";

-- DropTable
DROP TABLE "UserBadge";
