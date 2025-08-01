/*
  Warnings:

  - You are about to drop the column `image_icon` on the `AppVersao` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[imageIconId]` on the table `AppVersao` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[appVersaoId]` on the table `AppVersaoAttachment` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."AppVersaoAttachment" DROP CONSTRAINT "AppVersaoAttachment_appVersaoId_fkey";

-- AlterTable
ALTER TABLE "store_nodejs"."AppVersao" DROP COLUMN "image_icon",
ADD COLUMN     "imageIconId" TEXT;

-- AlterTable
ALTER TABLE "store_nodejs"."AppVersaoAttachment" ADD COLUMN     "appVersaoAttachmentsId" TEXT,
ALTER COLUMN "appVersaoId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AppVersao_imageIconId_key" ON "store_nodejs"."AppVersao"("imageIconId");

-- CreateIndex
CREATE UNIQUE INDEX "AppVersaoAttachment_appVersaoId_key" ON "store_nodejs"."AppVersaoAttachment"("appVersaoId");

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppVersaoAttachment" ADD CONSTRAINT "AppVersaoAttachment_appVersaoId_fkey" FOREIGN KEY ("appVersaoId") REFERENCES "store_nodejs"."AppVersao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppVersaoAttachment" ADD CONSTRAINT "AppVersaoAttachment_appVersaoAttachmentsId_fkey" FOREIGN KEY ("appVersaoAttachmentsId") REFERENCES "store_nodejs"."AppVersao"("id") ON DELETE SET NULL ON UPDATE CASCADE;
