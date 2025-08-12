/*
  Warnings:

  - The `position` column on the `Admin` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Position" AS ENUM ('Tresorier', 'VPO', 'SecGe', 'DirCo', 'Info', 'Pres');

-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "position",
ADD COLUMN     "position" "Position";

-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "gender" TEXT;
