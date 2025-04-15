-- CreateTable
CREATE TABLE "consumerProviderRequests" (
    "id" TEXT NOT NULL,
    "consumerPublicKey" TEXT NOT NULL,
    "providerPublicKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "Status" NOT NULL,
    "transactionHash" TEXT NOT NULL,

    CONSTRAINT "consumerProviderRequests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "consumerProviderRequests" ADD CONSTRAINT "consumerProviderRequests_consumerPublicKey_fkey" FOREIGN KEY ("consumerPublicKey") REFERENCES "Consumer"("publicKey") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consumerProviderRequests" ADD CONSTRAINT "consumerProviderRequests_providerPublicKey_fkey" FOREIGN KEY ("providerPublicKey") REFERENCES "gasAdmin"("publicKey") ON DELETE RESTRICT ON UPDATE CASCADE;
