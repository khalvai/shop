/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `verification` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "verification_phone_key" ON "verification"("phone");
