/*
  Warnings:

  - A unique constraint covering the columns `[companyName]` on the table `gasProvider` will be added. If there are existing duplicate values, this will fail.
  - Made the column `companyName` on table `gasProvider` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "gasProvider" ALTER COLUMN "companyName" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "gasProvider_companyName_key" ON "gasProvider"("companyName");
