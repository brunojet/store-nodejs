# Diagrama ER (Mermaid) com Colunas

```mermaid
---
config:
  layout: elk
---
erDiagram
	direction TB
	TerminalModelo {
		String id PK
		String nome
	}
	TipoIntegracao {
		String id PK
		String nome UK
	}
	TipoCategoria {
		String id PK
		String nome UK
	}
	Categoria {
		String id PK
		String nome UK
		String tipoCategoriaId FK
		String paiId FK
	}
	CategoriaAplicativoVinculo {
		String id PK
		String aplicativoId FK
		String categoriaAplicativoId FK
	}
	Aplicativo {
		String id PK
		String nome
		String descricao
		String codigoParceiro UK
		String codigoProduto
		String contatoNome
		String contatoEmail
		String contatoTelefone
		String contatoDescricao
	}
	Anexo {
		String id PK
		String filePath
		String tipoMime
		Int tamanho
		String md5
		Boolean arquivoExiste
	}
	ImagemAplicativo {
		String id PK
		StatusAppImage status
		String anexoId FK
	}
	ImagemDetalheAplicativoVinculo {
		String id PK
		String imagemAplicativoId FK
		String cadastroAplicativoId FK
	}
	CadastroAplicativoHistorico {
		String id PK
		StatusCadastroAplicativo status
		String descricao
		String aplicativoId FK
	}
	ConfiguracaoAplicativo {
		String id PK
		String nomePacoteApp
		String tipoIntegracaoId FK
		String terminalModeloId FK
		String aplicativoId FK
	}
	ConfiguracaoCadastroAplicativoVinculo {
		String id PK
		String cadastroAplicativoId FK
		String configuracaoAplicativoId FK
	}
	VersaoAplicativo {
		String id PK
		String nome
		String iconeId FK
		String versao
		String changelog
		String tamanho
		String configuracaoAplicativoId FK
		String cadastroAplicativoId FK
		String pacoteMdm
		String versaoMdm
	}
	CatalogoAplicativo {
		String id PK
		String aplicativoId FK
		String tipoIntegracaoId FK
		String terminalModeloId FK
		EstagioCatalogo tipoEstagio
		String versaoAplicativoId FK
	}

	Aplicativo||--o{CatalogoAplicativo:"tem"
	Aplicativo||--o{ConfiguracaoAplicativo:"tem"
	Aplicativo||--o{CadastroAplicativoHistorico:"tem"
	Aplicativo||--o{CategoriaAplicativoVinculo:"tem"
	Categoria||--o{CategoriaAplicativoVinculo:"tem"
	Categoria||--o{Categoria:"subcategoria"
	TipoCategoria||--o{Categoria:"tem"
	TerminalModelo||--o{CatalogoAplicativo:"tem"
	TerminalModelo||--o{ConfiguracaoAplicativo:"tem"
	TipoIntegracao||--o{CatalogoAplicativo:"tem"
	TipoIntegracao||--o{ConfiguracaoAplicativo:"tem"
	ConfiguracaoAplicativo||--o{VersaoAplicativo:"tem"
	CadastroAplicativoHistorico||--o{VersaoAplicativo:"tem"
	VersaoAplicativo||--o{CatalogoAplicativo:"publicado em"
	ImagemAplicativo||--o{VersaoAplicativo:"icone"
	ImagemDetalheAplicativoVinculo}o--||ImagemAplicativo:"imagem"
	ImagemDetalheAplicativoVinculo}o--||CadastroAplicativoHistorico:"cadastro"
	Anexo||--o{ImagemAplicativo:"arquivo"
	ConfiguracaoCadastroAplicativoVinculo}o--||CadastroAplicativoHistorico:"cadastro"
	ConfiguracaoCadastroAplicativoVinculo}o--||ConfiguracaoAplicativo:"configuração"
```
