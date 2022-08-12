-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT;

-- CreateTable
CREATE TABLE "NlUser" (
    "phone" TEXT NOT NULL,
    "try" INTEGER NOT NULL DEFAULT 0,
    "reason" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "lastResendTime" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "NlUser_phone_key" ON "NlUser"("phone");
