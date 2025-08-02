/*
  Warnings:

  - You are about to drop the column `appVersaoId` on the `AppVersaoAttachment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."AppVersaoAttachment" DROP CONSTRAINT "AppVersaoAttachment_appVersaoId_fkey";

-- AlterTable
ALTER TABLE "store_nodejs"."AppVersaoAttachment" DROP COLUMN "appVersaoId";
