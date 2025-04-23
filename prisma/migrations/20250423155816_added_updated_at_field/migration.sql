/*
  Warnings:

  - Added the required column `updatedAt` to the `consumerProviderRequests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `providerRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "consumerProviderRequests" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "providerRequest" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
