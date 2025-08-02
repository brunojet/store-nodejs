/*
  Warnings:

  - You are about to drop the column `imageIconId` on the `AppVersao` table. All the data in the column will be lost.
  - You are about to drop the `AppDetalhesImages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AppVersionIcon` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[iconId]` on the table `AppVersao` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."AppDetalhesImages" DROP CONSTRAINT "AppDetalhesImages_appDetalhesId_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppDetalhesImages" DROP CONSTRAINT "AppDetalhesImages_attachmentId_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppVersao" DROP CONSTRAINT "AppVersao_imageIconId_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppVersionIcon" DROP CONSTRAINT "AppVersionIcon_attachmentId_fkey";

-- DropIndex
DROP INDEX "store_nodejs"."AppVersao_imageIconId_key";

-- AlterTable
ALTER TABLE "store_nodejs"."AppVersao" DROP COLUMN "imageIconId",
ADD COLUMN     "iconId" TEXT;

-- DropTable
DROP TABLE "store_nodejs"."AppDetalhesImages";

-- DropTable
DROP TABLE "store_nodejs"."AppVersionIcon";

-- CreateTable
CREATE TABLE "store_nodejs"."AppImage" (
    "id" TEXT NOT NULL,
    "attachmentId" TEXT NOT NULL,
    "appDetalhesId" TEXT,

    CONSTRAINT "AppImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AppVersao_iconId_key" ON "store_nodejs"."AppVersao"("iconId");

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppVersao" ADD CONSTRAINT "AppVersao_iconId_fkey" FOREIGN KEY ("iconId") REFERENCES "store_nodejs"."AppImage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppImage" ADD CONSTRAINT "AppImage_attachmentId_fkey" FOREIGN KEY ("attachmentId") REFERENCES "store_nodejs"."Attachment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppImage" ADD CONSTRAINT "AppImage_appDetalhesId_fkey" FOREIGN KEY ("appDetalhesId") REFERENCES "store_nodejs"."AppDetalhes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
