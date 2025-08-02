/*
  Warnings:

  - The primary key for the `Aplicativo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Aplicativo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `AppCadastro` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `AppCadastro` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `terminal_modelo_id` column on the `AppCadastro` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `AppContato` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `AppContato` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `AppDetalhes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `AppDetalhes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `AppImage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `AppImage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `app_detalhes_id` column on the `AppImage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `AppVersao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `AppVersao` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `icon_id` column on the `AppVersao` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Attachment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Attachment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `TerminalModelo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `TerminalModelo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `aplicativo_cadastro_id` on the `Aplicativo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `aplicativo_versao_id` on the `Aplicativo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `app_contato_id` on the `AppCadastro` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `app_detalhes_id` on the `AppCadastro` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `attachment_id` on the `AppImage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."Aplicativo" DROP CONSTRAINT "Aplicativo_aplicativo_cadastro_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."Aplicativo" DROP CONSTRAINT "Aplicativo_aplicativo_versao_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" DROP CONSTRAINT "AppCadastro_app_contato_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" DROP CONSTRAINT "AppCadastro_app_detalhes_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" DROP CONSTRAINT "AppCadastro_terminal_modelo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppImage" DROP CONSTRAINT "AppImage_app_detalhes_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppImage" DROP CONSTRAINT "AppImage_attachment_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppVersao" DROP CONSTRAINT "AppVersao_icon_id_fkey";

-- AlterTable
ALTER TABLE "store_nodejs"."Aplicativo" DROP CONSTRAINT "Aplicativo_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "aplicativo_cadastro_id",
ADD COLUMN     "aplicativo_cadastro_id" INTEGER NOT NULL,
DROP COLUMN "aplicativo_versao_id",
ADD COLUMN     "aplicativo_versao_id" INTEGER NOT NULL,
ADD CONSTRAINT "Aplicativo_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "store_nodejs"."AppCadastro" DROP CONSTRAINT "AppCadastro_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "app_contato_id",
ADD COLUMN     "app_contato_id" INTEGER NOT NULL,
DROP COLUMN "app_detalhes_id",
ADD COLUMN     "app_detalhes_id" INTEGER NOT NULL,
DROP COLUMN "terminal_modelo_id",
ADD COLUMN     "terminal_modelo_id" INTEGER,
ADD CONSTRAINT "AppCadastro_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "store_nodejs"."AppContato" DROP CONSTRAINT "AppContato_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "AppContato_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "store_nodejs"."AppDetalhes" DROP CONSTRAINT "AppDetalhes_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "AppDetalhes_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "store_nodejs"."AppImage" DROP CONSTRAINT "AppImage_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "app_detalhes_id",
ADD COLUMN     "app_detalhes_id" INTEGER,
DROP COLUMN "attachment_id",
ADD COLUMN     "attachment_id" INTEGER NOT NULL,
ADD CONSTRAINT "AppImage_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "store_nodejs"."AppVersao" DROP CONSTRAINT "AppVersao_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "icon_id",
ADD COLUMN     "icon_id" INTEGER,
ADD CONSTRAINT "AppVersao_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "store_nodejs"."Attachment" DROP CONSTRAINT "Attachment_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Attachment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "store_nodejs"."TerminalModelo" DROP CONSTRAINT "TerminalModelo_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "TerminalModelo_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" ADD CONSTRAINT "AppCadastro_app_contato_id_fkey" FOREIGN KEY ("app_contato_id") REFERENCES "store_nodejs"."AppContato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" ADD CONSTRAINT "AppCadastro_app_detalhes_id_fkey" FOREIGN KEY ("app_detalhes_id") REFERENCES "store_nodejs"."AppDetalhes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" ADD CONSTRAINT "AppCadastro_terminal_modelo_id_fkey" FOREIGN KEY ("terminal_modelo_id") REFERENCES "store_nodejs"."TerminalModelo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
