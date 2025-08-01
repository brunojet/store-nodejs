/*
  Warnings:

  - You are about to drop the column `appVersaoAttachmentsId` on the `AppVersaoAttachment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."AppVersaoAttachment" DROP CONSTRAINT "AppVersaoAttachment_appVersaoAttachmentsId_fkey";

-- DropIndex
DROP INDEX "store_nodejs"."AppVersaoAttachment_appVersaoId_key";

-- AlterTable
ALTER TABLE "store_nodejs"."AppVersaoAttachment" DROP COLUMN "appVersaoAttachmentsId";

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppVersao" ADD CONSTRAINT "AppVersao_imageIconId_fkey" FOREIGN KEY ("imageIconId") REFERENCES "store_nodejs"."AppVersaoAttachment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
