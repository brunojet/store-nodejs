
## Pre-reqs
1. Modelo de terminal cadastrado no banco de dados.

## Jornada

1. **Criar um aplicativo**:
   - Endpoint: `POST /api/cadastro-aplicativo`
   - Payload:
     ```json
     {
       "codigoParceiro": "PARCEIRO123",
       "codigoProduto": "PRODUTO456",
       "terminalModeloId": 1,
     }
     ```

2. **Criar ou associar contato de suporte para o aplicativo**:
   - Endpoint: `POST /api/cadastro-aplicativo/1/contato-suporte`
   - Payload:
     ```json
     {
       "nome": "Suporte Técnico",
       "email": "suporte@meuapp.com",
       "telefone": "1234-5678"
     }
     ```

3. **Criar ou associar detalhe do aplicativo**:
   - Endpoint: `POST /api/cadastro-aplicativo/1/detalhes`
   - Payload:
     ```json
     {
       "descricao": "Detalhes do meu app",
       "images": ["image1.png", "image2.png"]
     }
     ```

4. **Criar ou associar configuração do aplicativo**:
   - Endpoint: `POST /api/cadastro-aplicativo/1/configuracao`
   - Payload:
     ```json
     {
       "nomePacoteApp": "com.meuapp",
       "tipoIntegracao": "ADQ",
       "terminalModeloId": 1
     }
     ```

5. **Criar ou associar versão do aplicativo no catálogo**:
   - Endpoint: `POST /api/catalogo-aplicativo`
   - Payload:
     ```json
     {
       "configuracaoAplicativoId": 1,
       "versaoAplicativo": {
         "imageIcon": "icon.png",
         "versao": "1.0.0",
         "changelog": "Primeira versão",
         "pacoteMdm": "mdm-package.zip",
         "versaoMdm": "1.0.0",
         "tamanho": "10MB",
         "avaliacao": 4.5
       }
     }
     ```
