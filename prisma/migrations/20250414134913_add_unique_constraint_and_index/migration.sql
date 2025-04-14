-- CreateTable
CREATE TABLE "Consumer" (
    "id" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "nonce" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Consumer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gasAdmin" (
    "id" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "nonce" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "companyName" TEXT,

    CONSTRAINT "gasAdmin_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "gasAdmin_publicKey_key" ON "gasAdmin"("publicKey");

-- CreateIndex
CREATE INDEX "gasAdmin_publicKey_idx" ON "gasAdmin"("publicKey");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_publicKey_key" ON "Admin"("publicKey");

-- CreateIndex
CREATE INDEX "Admin_publicKey_idx" ON "Admin"("publicKey");
