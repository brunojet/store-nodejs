-- CreateTable
CREATE TABLE "store_nodejs"."AppVersao" (
    "id" TEXT NOT NULL,
    "image_icon" TEXT NOT NULL,
    "versao" TEXT NOT NULL,
    "changelog" TEXT NOT NULL,
    "pacote_mdm" TEXT NOT NULL,
    "versao_mdm" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "codigo_parceiro" TEXT NOT NULL,
    "avaliacao" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "AppVersao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."Aplicativo" (
    "id" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "aplicativoCadastroId" TEXT NOT NULL,
    "aplicativoVersaoId" TEXT NOT NULL,

    CONSTRAINT "Aplicativo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "store_nodejs"."Aplicativo" ADD CONSTRAINT "Aplicativo_aplicativoCadastroId_fkey" FOREIGN KEY ("aplicativoCadastroId") REFERENCES "store_nodejs"."AppCadastro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."Aplicativo" ADD CONSTRAINT "Aplicativo_aplicativoVersaoId_fkey" FOREIGN KEY ("aplicativoVersaoId") REFERENCES "store_nodejs"."AppVersao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
