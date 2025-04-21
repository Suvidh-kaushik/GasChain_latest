-- CreateTable
CREATE TABLE "Temp" (
    "publicKey" TEXT NOT NULL,
    "nonce" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Temp_pkey" PRIMARY KEY ("publicKey")
);
