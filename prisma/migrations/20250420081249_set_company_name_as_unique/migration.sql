/*
  Warnings:

  - A unique constraint covering the columns `[companyName]` on the table `gasAdmin` will be added. If there are existing duplicate values, this will fail.
  - Made the column `companyName` on table `gasAdmin` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "gasAdmin" ALTER COLUMN "companyName" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "gasAdmin_companyName_key" ON "gasAdmin"("companyName");
