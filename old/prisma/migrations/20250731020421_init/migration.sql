/*
  Warnings:

  - You are about to drop the `AppImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."AppImage" DROP CONSTRAINT "AppImage_appDetalhesId_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppImage" DROP CONSTRAINT "AppImage_appVersaoId_fkey";

-- DropTable
DROP TABLE "store_nodejs"."AppImage";

-- CreateTable
CREATE TABLE "store_nodejs"."Attachment" (
    "id" TEXT NOT NULL,
    "file_path" TEXT NOT NULL,

    CONSTRAINT "Attachment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."AppVersaoAttachment" (
    "id" TEXT NOT NULL,
    "appVersaoId" TEXT NOT NULL,
    "attachmentId" TEXT NOT NULL,

    CONSTRAINT "AppVersaoAttachment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."AppDetalhesAttachment" (
    "id" TEXT NOT NULL,
    "appDetalhesId" TEXT NOT NULL,
    "attachmentId" TEXT NOT NULL,

    CONSTRAINT "AppDetalhesAttachment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppVersaoAttachment" ADD CONSTRAINT "AppVersaoAttachment_appVersaoId_fkey" FOREIGN KEY ("appVersaoId") REFERENCES "store_nodejs"."AppVersao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppVersaoAttachment" ADD CONSTRAINT "AppVersaoAttachment_attachmentId_fkey" FOREIGN KEY ("attachmentId") REFERENCES "store_nodejs"."Attachment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppDetalhesAttachment" ADD CONSTRAINT "AppDetalhesAttachment_appDetalhesId_fkey" FOREIGN KEY ("appDetalhesId") REFERENCES "store_nodejs"."AppDetalhes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppDetalhesAttachment" ADD CONSTRAINT "AppDetalhesAttachment_attachmentId_fkey" FOREIGN KEY ("attachmentId") REFERENCES "store_nodejs"."Attachment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
