/*
  Warnings:

  - You are about to drop the column `userpermissions` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `userRoles` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Permission` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `photo` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_userpermissions_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userRoles_fkey";

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "userpermissions";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userRoles",
ADD COLUMN     "photo" VARCHAR(255) NOT NULL,
ADD COLUMN     "roleId" INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE "Permission";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
