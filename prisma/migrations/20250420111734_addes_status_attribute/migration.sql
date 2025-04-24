-- AlterTable
ALTER TABLE "Consumer" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "gasAdmin" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';
