/*
  Warnings:

  - You are about to drop the `gasProvider` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "consumerProviderRequests" DROP CONSTRAINT "consumerProviderRequests_providerPublicKey_fkey";

-- DropForeignKey
ALTER TABLE "providerRequest" DROP CONSTRAINT "providerRequest_providerPublicKey_fkey";

-- AlterTable
ALTER TABLE "providerRequest" ADD COLUMN     "transactionHash" TEXT NOT NULL DEFAULT 'Get the transaction hash after storing in blockchain';

-- DropTable
DROP TABLE "gasProvider";

-- CreateTable
CREATE TABLE "gasProvider" (
    "id" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "companyName" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "gasProvider_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "gasProvider_publicKey_key" ON "gasProvider"("publicKey");

-- CreateIndex
CREATE UNIQUE INDEX "gasProvider_companyName_key" ON "gasProvider"("companyName");

-- CreateIndex
CREATE INDEX "gasProvider_publicKey_idx" ON "gasProvider"("publicKey");

-- AddForeignKey
ALTER TABLE "providerRequest" ADD CONSTRAINT "providerRequest_providerPublicKey_fkey" FOREIGN KEY ("providerPublicKey") REFERENCES "gasProvider"("publicKey") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consumerProviderRequests" ADD CONSTRAINT "consumerProviderRequests_providerPublicKey_fkey" FOREIGN KEY ("providerPublicKey") REFERENCES "gasProvider"("publicKey") ON DELETE RESTRICT ON UPDATE CASCADE;
