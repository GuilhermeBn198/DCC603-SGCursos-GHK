/*
  Warnings:

  - A unique constraint covering the columns `[uuid]` on the table `Certificate` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uuid` to the `Certificate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Certificate" ADD COLUMN     "uuid" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_uuid_key" ON "Certificate"("uuid");
