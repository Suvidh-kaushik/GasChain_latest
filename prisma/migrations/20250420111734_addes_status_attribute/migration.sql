-- AlterTable
ALTER TABLE "Consumer" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "gasProvider" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';
