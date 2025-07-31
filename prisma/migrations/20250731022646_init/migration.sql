/*
  Warnings:

  - You are about to drop the `AppDetalhesAttachment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AppVersaoAttachment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."AppDetalhesAttachment" DROP CONSTRAINT "AppDetalhesAttachment_appDetalhesId_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppDetalhesAttachment" DROP CONSTRAINT "AppDetalhesAttachment_attachmentId_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppVersao" DROP CONSTRAINT "AppVersao_imageIconId_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppVersaoAttachment" DROP CONSTRAINT "AppVersaoAttachment_attachmentId_fkey";

-- DropTable
DROP TABLE "store_nodejs"."AppDetalhesAttachment";

-- DropTable
DROP TABLE "store_nodejs"."AppVersaoAttachment";

-- CreateTable
CREATE TABLE "store_nodejs"."AppVersionIcon" (
    "id" TEXT NOT NULL,
    "attachmentId" TEXT NOT NULL,

    CONSTRAINT "AppVersionIcon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."AppDetalhesImages" (
    "id" TEXT NOT NULL,
    "attachmentId" TEXT NOT NULL,
    "appDetalhesId" TEXT NOT NULL,

    CONSTRAINT "AppDetalhesImages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppVersao" ADD CONSTRAINT "AppVersao_imageIconId_fkey" FOREIGN KEY ("imageIconId") REFERENCES "store_nodejs"."AppVersionIcon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppVersionIcon" ADD CONSTRAINT "AppVersionIcon_attachmentId_fkey" FOREIGN KEY ("attachmentId") REFERENCES "store_nodejs"."Attachment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppDetalhesImages" ADD CONSTRAINT "AppDetalhesImages_attachmentId_fkey" FOREIGN KEY ("attachmentId") REFERENCES "store_nodejs"."Attachment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppDetalhesImages" ADD CONSTRAINT "AppDetalhesImages_appDetalhesId_fkey" FOREIGN KEY ("appDetalhesId") REFERENCES "store_nodejs"."AppDetalhes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
