/*
  Warnings:

  - You are about to drop the column `cancellation_reason` on the `Enrollment` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `Enrollment` table. All the data in the column will be lost.
  - You are about to drop the column `enrollment_date` on the `Enrollment` table. All the data in the column will be lost.
  - You are about to drop the column `updated_by` on the `Enrollment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Enrollment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[classId]` on the table `Enrollment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `classId` to the `Enrollment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Enrollment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Enrollment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Enrollment" DROP COLUMN "cancellation_reason",
DROP COLUMN "created_by",
DROP COLUMN "enrollment_date",
DROP COLUMN "updated_by",
ADD COLUMN     "classId" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_userId_key" ON "Enrollment"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_classId_key" ON "Enrollment"("classId");

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
