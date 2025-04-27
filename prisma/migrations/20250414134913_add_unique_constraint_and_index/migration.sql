-- CreateTable
CREATE TABLE "Consumer" (
    "id" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "nonce" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Consumer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gasProvider" (
    "id" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "nonce" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "companyName" TEXT,

    CONSTRAINT "gasProvider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "nonce" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Consumer_publicKey_key" ON "Consumer"("publicKey");

-- CreateIndex
CREATE INDEX "Consumer_publicKey_idx" ON "Consumer"("publicKey");

-- CreateIndex
CREATE UNIQUE INDEX "gasProvider_publicKey_key" ON "gasProvider"("publicKey");

-- CreateIndex
CREATE INDEX "gasProvider_publicKey_idx" ON "gasProvider"("publicKey");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_publicKey_key" ON "Admin"("publicKey");

-- CreateIndex
CREATE INDEX "Admin_publicKey_idx" ON "Admin"("publicKey");
