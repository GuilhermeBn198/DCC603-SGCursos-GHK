/*
  Warnings:

  - Added the required column `house_number` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postal_code` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "house_number" VARCHAR(255) NOT NULL,
ADD COLUMN     "postal_code" VARCHAR(255) NOT NULL;
