/*
  Warnings:

  - You are about to drop the column `aplicativoCadastroId` on the `Aplicativo` table. All the data in the column will be lost.
  - You are about to drop the column `aplicativoVersaoId` on the `Aplicativo` table. All the data in the column will be lost.
  - You are about to drop the column `appContatoId` on the `AppCadastro` table. All the data in the column will be lost.
  - You are about to drop the column `appDetalhesId` on the `AppCadastro` table. All the data in the column will be lost.
  - You are about to drop the column `appDetalhesId` on the `AppImage` table. All the data in the column will be lost.
  - You are about to drop the column `attachmentId` on the `AppImage` table. All the data in the column will be lost.
  - You are about to drop the column `iconId` on the `AppVersao` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[icon_id]` on the table `AppVersao` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `aplicativo_cadastro_id` to the `Aplicativo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `aplicativo_versao_id` to the `Aplicativo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `app_contato_id` to the `AppCadastro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `app_detalhes_id` to the `AppCadastro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_integracao` to the `AppCadastro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attachment_id` to the `AppImage` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "store_nodejs"."TipoIntegracao" AS ENUM ('ADQ', 'TEF');

-- DropForeignKey
ALTER TABLE "store_nodejs"."Aplicativo" DROP CONSTRAINT "Aplicativo_aplicativoCadastroId_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."Aplicativo" DROP CONSTRAINT "Aplicativo_aplicativoVersaoId_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" DROP CONSTRAINT "AppCadastro_appContatoId_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" DROP CONSTRAINT "AppCadastro_appDetalhesId_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppImage" DROP CONSTRAINT "AppImage_appDetalhesId_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppImage" DROP CONSTRAINT "AppImage_attachmentId_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppVersao" DROP CONSTRAINT "AppVersao_iconId_fkey";

-- DropIndex
DROP INDEX "store_nodejs"."AppVersao_iconId_key";

-- AlterTable
ALTER TABLE "store_nodejs"."Aplicativo" DROP COLUMN "aplicativoCadastroId",
DROP COLUMN "aplicativoVersaoId",
ADD COLUMN     "aplicativo_cadastro_id" TEXT NOT NULL,
ADD COLUMN     "aplicativo_versao_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "store_nodejs"."AppCadastro" DROP COLUMN "appContatoId",
DROP COLUMN "appDetalhesId",
ADD COLUMN     "app_contato_id" TEXT NOT NULL,
ADD COLUMN     "app_detalhes_id" TEXT NOT NULL,
ADD COLUMN     "tipo_integracao" "store_nodejs"."TipoIntegracao" NOT NULL;

-- AlterTable
ALTER TABLE "store_nodejs"."AppImage" DROP COLUMN "appDetalhesId",
DROP COLUMN "attachmentId",
ADD COLUMN     "app_detalhes_id" TEXT,
ADD COLUMN     "attachment_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "store_nodejs"."AppVersao" DROP COLUMN "iconId",
ADD COLUMN     "icon_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "AppVersao_icon_id_key" ON "store_nodejs"."AppVersao"("icon_id");

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" ADD CONSTRAINT "AppCadastro_app_contato_id_fkey" FOREIGN KEY ("app_contato_id") REFERENCES "store_nodejs"."AppContato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" ADD CONSTRAINT "AppCadastro_app_detalhes_id_fkey" FOREIGN KEY ("app_detalhes_id") REFERENCES "store_nodejs"."AppDetalhes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppVersao" ADD CONSTRAINT "AppVersao_icon_id_fkey" FOREIGN KEY ("icon_id") REFERENCES "store_nodejs"."AppImage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppImage" ADD CONSTRAINT "AppImage_attachment_id_fkey" FOREIGN KEY ("attachment_id") REFERENCES "store_nodejs"."Attachment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppImage" ADD CONSTRAINT "AppImage_app_detalhes_id_fkey" FOREIGN KEY ("app_detalhes_id") REFERENCES "store_nodejs"."AppDetalhes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."Aplicativo" ADD CONSTRAINT "Aplicativo_aplicativo_cadastro_id_fkey" FOREIGN KEY ("aplicativo_cadastro_id") REFERENCES "store_nodejs"."AppCadastro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."Aplicativo" ADD CONSTRAINT "Aplicativo_aplicativo_versao_id_fkey" FOREIGN KEY ("aplicativo_versao_id") REFERENCES "store_nodejs"."AppVersao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
