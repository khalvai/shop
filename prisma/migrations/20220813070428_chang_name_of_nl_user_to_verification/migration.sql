/*
  Warnings:

  - You are about to drop the `NlUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "NlUser";

-- CreateTable
CREATE TABLE "verification" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "try" INTEGER NOT NULL DEFAULT 0,
    "reason" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "lastResendTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "verification_pkey" PRIMARY KEY ("id")
);
