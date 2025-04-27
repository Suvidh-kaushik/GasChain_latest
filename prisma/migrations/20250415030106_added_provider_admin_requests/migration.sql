-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- CreateTable
CREATE TABLE "providerRequest" (
    "id" TEXT NOT NULL,
    "providerPublicKey" TEXT NOT NULL,
    "adminPublicKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "Status" NOT NULL,

    CONSTRAINT "providerRequest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "providerRequest" ADD CONSTRAINT "providerRequest_providerPublicKey_fkey" FOREIGN KEY ("providerPublicKey") REFERENCES "gasProvider"("publicKey") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "providerRequest" ADD CONSTRAINT "providerRequest_adminPublicKey_fkey" FOREIGN KEY ("adminPublicKey") REFERENCES "Admin"("publicKey") ON DELETE RESTRICT ON UPDATE CASCADE;
