/*
  Warnings:

  - You are about to drop the column `photo` on the `User` table. All the data in the column will be lost.
  - Added the required column `userRoles` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "photo",
ADD COLUMN     "userRoles" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Permission" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "userpermissions" INTEGER NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_userpermissions_fkey" FOREIGN KEY ("userpermissions") REFERENCES "Permission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userRoles_fkey" FOREIGN KEY ("userRoles") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
