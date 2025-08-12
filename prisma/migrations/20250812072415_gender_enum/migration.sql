/*
  Warnings:

  - The `gender` column on the `Person` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('masculine', 'feminine', 'other');

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender";
