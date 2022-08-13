-- DropIndex
DROP INDEX "NlUser_phone_key";

-- AlterTable
ALTER TABLE "NlUser" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "NlUser_pkey" PRIMARY KEY ("id");
