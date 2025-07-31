-- CreateTable
CREATE TABLE "store_nodejs"."AppContato" (
    "id" TEXT NOT NULL,
    "nome_parceiro" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "AppContato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."AppDetalhes" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "AppDetalhes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."AppCadastro" (
    "id" TEXT NOT NULL,
    "codigo_produto" TEXT NOT NULL,
    "codigo_parceiro" TEXT NOT NULL,
    "appContatoId" TEXT NOT NULL,
    "appDetalhesId" TEXT NOT NULL,

    CONSTRAINT "AppCadastro_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" ADD CONSTRAINT "AppCadastro_appContatoId_fkey" FOREIGN KEY ("appContatoId") REFERENCES "store_nodejs"."AppContato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" ADD CONSTRAINT "AppCadastro_appDetalhesId_fkey" FOREIGN KEY ("appDetalhesId") REFERENCES "store_nodejs"."AppDetalhes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
