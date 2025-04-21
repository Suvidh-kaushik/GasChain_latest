/*
  Warnings:

  - You are about to drop the column `nonce` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `nonce` on the `Consumer` table. All the data in the column will be lost.
  - You are about to drop the column `nonce` on the `gasAdmin` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "nonce";

-- AlterTable
ALTER TABLE "Consumer" DROP COLUMN "nonce";

-- AlterTable
ALTER TABLE "consumerProviderRequests" ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "gasAdmin" DROP COLUMN "nonce";

-- AlterTable
ALTER TABLE "providerRequest" ALTER COLUMN "status" SET DEFAULT 'PENDING';
