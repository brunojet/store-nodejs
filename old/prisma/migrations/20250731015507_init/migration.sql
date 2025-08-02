-- CreateTable
CREATE TABLE "store_nodejs"."AppImage" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "appDetalhesId" TEXT,
    "appVersaoId" TEXT,

    CONSTRAINT "AppImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppImage" ADD CONSTRAINT "AppImage_appDetalhesId_fkey" FOREIGN KEY ("appDetalhesId") REFERENCES "store_nodejs"."AppDetalhes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppImage" ADD CONSTRAINT "AppImage_appVersaoId_fkey" FOREIGN KEY ("appVersaoId") REFERENCES "store_nodejs"."AppVersao"("id") ON DELETE SET NULL ON UPDATE CASCADE;
