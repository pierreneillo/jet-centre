/*
  Warnings:

  - The values [Tresorier] on the enum `Position` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Position_new" AS ENUM ('Tres', 'VPO', 'SecGe', 'DirCo', 'Info', 'Pres');
ALTER TABLE "Admin" ALTER COLUMN "position" TYPE "Position_new" USING ("position"::text::"Position_new");
ALTER TYPE "Position" RENAME TO "Position_old";
ALTER TYPE "Position_new" RENAME TO "Position";
DROP TYPE "Position_old";
COMMIT;
