/*
  Warnings:

  - Added the required column `job` to the `Clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Clients" ADD COLUMN     "job" TEXT NOT NULL;
