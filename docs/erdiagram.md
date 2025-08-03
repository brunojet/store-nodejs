# Diagrama ER (Mermaid) com Colunas

```mermaid
---
config:
  layout: elk
---
erDiagram
    Aplicativo {
        String id
        String nome
        String descricao
        String codigoParceiro
        String codigoProduto
        String contatoParceiroId
    }
    CatalogoAplicativo {
        String id
        String aplicativoId
        String tipoIntegracaoId
        String terminalModeloId
        EstagioCatalogo tipoEstagio
        String versaoAplicativoId
    }
    ConfiguracaoAplicativo {
        String id
        String nomePacoteApp
        String tipoIntegracaoId
        String terminalModeloId
        String aplicativoId
    }
    CadastroAplicativoHistorico {
        String id
        StatusCadastroAplicativo status
        String aplicativoId
        String detalhesAplicativoId
    }
    Categoria {
        String id
        String nome
        String tipoCategoriaId
        String paiId
    }
    CategoriaAplicativoVinculo {
        String id
        String aplicativoId
        String categoriaAplicativoId
    }
    TipoCategoria {
        String id
        String nome
    }
    TerminalModelo {
        String id
        String nome
    }
    TipoIntegracao {
        String id
        String nome
    }
    VersaoAplicativo {
        String id
        String nome
        String iconeId
        String versao
        String changelog
        String tamanho
        String configuracaoAplicativoId
        String cadastroAplicativoId
        String pacoteMdm
        String versaoMdm
    }
    ImagemAplicativo {
        String id
        StatusAppImage status
        String anexoId
    }
    ImagemDetalheAplicativoVinculo {
        String id
        String imagemAplicativoId
        String detalheAplicativoId
    }
    Anexo {
        String id
        String filePath
        String tipoMime
        Int tamanho
        String md5
        Boolean arquivoExiste
    }
    DetalheAplicativoHistorico {
        String id
        String descricao
    }
    ContatoParceiroHistorico {
        String id
        String codigoParceiro
        String descricao
        String nome
        String email
        String telefone
    }
    ConfiguracaoCadastroAplicativoVinculo {
        String id
        String cadastroAplicativoId
        String configuracaoAplicativoId
    }

    Aplicativo ||--o{ CatalogoAplicativo : "tem"
    Aplicativo ||--o{ ConfiguracaoAplicativo : "tem"
    Aplicativo ||--o{ CadastroAplicativoHistorico : "tem"
    Aplicativo ||--o{ CategoriaAplicativoVinculo : "tem"
    Categoria ||--o{ CategoriaAplicativoVinculo : "tem"
    Categoria ||--o{ Categoria : "subcategoria"
    TipoCategoria ||--o{ Categoria : "tem"
    TerminalModelo ||--o{ CatalogoAplicativo : "tem"
    TerminalModelo ||--o{ ConfiguracaoAplicativo : "tem"
    TipoIntegracao ||--o{ CatalogoAplicativo : "tem"
    TipoIntegracao ||--o{ ConfiguracaoAplicativo : "tem"
    ConfiguracaoAplicativo ||--o{ VersaoAplicativo : "tem"
    CadastroAplicativoHistorico ||--o{ VersaoAplicativo : "tem"
    CadastroAplicativoHistorico }o--|| DetalheAplicativoHistorico : "detalhes"
    VersaoAplicativo ||--o{ CatalogoAplicativo : "publicado em"
    ImagemAplicativo ||--o{ VersaoAplicativo : "icone"
    ImagemDetalheAplicativoVinculo }o--|| ImagemAplicativo : "imagem"
    ImagemDetalheAplicativoVinculo }o--|| DetalheAplicativoHistorico : "detalhe"
    Anexo ||--o{ ImagemAplicativo : "arquivo"
    ContatoParceiroHistorico ||--o{ Aplicativo : "contato"
    ConfiguracaoCadastroAplicativoVinculo }o--|| CadastroAplicativoHistorico : "cadastro"
    ConfiguracaoCadastroAplicativoVinculo }o--|| ConfiguracaoAplicativo : "configuração"
```
