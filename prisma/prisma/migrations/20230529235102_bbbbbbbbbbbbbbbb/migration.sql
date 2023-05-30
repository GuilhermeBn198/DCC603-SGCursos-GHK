/*
  Warnings:

  - A unique constraint covering the columns `[userEnrollmentId]` on the table `Enrollment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[classId]` on the table `Enrollment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_userEnrollmentId_key" ON "Enrollment"("userEnrollmentId");

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_classId_key" ON "Enrollment"("classId");
