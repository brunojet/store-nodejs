// ...existing code...
// Imagem download

const express = require('express');
const app = express();
app.use(express.json());

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Controllers
const cadastroAplicativoController = require('./controllers/cadastroAplicativoController');
const detalheAplicativoController = require('./controllers/detalheAplicativoController');
const suporteParceiroController = require('./controllers/suporteParceiroController');
const configuracaoAplicativoController = require('./controllers/configuracaoAplicativoController');
const versaoAplicativoController = require('./controllers/versaoAplicativoController');
const catalogoAplicativoController = require('./controllers/catalogoAplicativoController');
const imagemController = require('./controllers/imagemController');
const terminalModeloController = require('./controllers/terminalModeloController');

// CadastroAplicativo CRUD
app.post('/api/cadastro-aplicativo', cadastroAplicativoController.create);
app.get('/api/cadastro-aplicativo', cadastroAplicativoController.getAll);
app.get('/api/cadastro-aplicativo/:id', cadastroAplicativoController.getById);
app.put('/api/cadastro-aplicativo/:id', cadastroAplicativoController.update);
app.delete('/api/cadastro-aplicativo/:id', cadastroAplicativoController.delete);

// DetalheAplicativo CRUD
app.post('/api/detalhe-aplicativo', upload.array('files'), detalheAplicativoController.create);
app.get('/api/detalhe-aplicativo', detalheAplicativoController.getAll);
app.get('/api/detalhe-aplicativo/:id', detalheAplicativoController.getById);
app.put('/api/detalhe-aplicativo/:id', detalheAplicativoController.update);
app.delete('/api/detalhe-aplicativo/:id', detalheAplicativoController.delete);

// SuporteParceiro CRUD
app.post('/api/suporte-parceiro', suporteParceiroController.create);
app.get('/api/suporte-parceiro', suporteParceiroController.getAll);
app.get('/api/suporte-parceiro/:id', suporteParceiroController.getById);
app.put('/api/suporte-parceiro/:id', suporteParceiroController.update);
app.delete('/api/suporte-parceiro/:id', suporteParceiroController.delete);

// ConfiguracaoAplicativo CRUD
app.post('/api/configuracao-aplicativo', configuracaoAplicativoController.create);
app.get('/api/configuracao-aplicativo', configuracaoAplicativoController.getAll);
app.get('/api/configuracao-aplicativo/:id', configuracaoAplicativoController.getById);
app.put('/api/configuracao-aplicativo/:id', configuracaoAplicativoController.update);
app.delete('/api/configuracao-aplicativo/:id', configuracaoAplicativoController.delete);

// VersaoAplicativo CRUD
app.post('/api/versao-aplicativo', upload.fields([{ name: 'file', maxCount: 1 }]), versaoAplicativoController.create);
app.get('/api/versao-aplicativo', versaoAplicativoController.getAll);
app.get('/api/versao-aplicativo/:id', versaoAplicativoController.getById);
app.put('/api/versao-aplicativo/:id', versaoAplicativoController.update);
app.delete('/api/versao-aplicativo/:id', versaoAplicativoController.delete);

// CatalogoAplicativo CRUD
app.post('/api/catalogo-aplicativo', catalogoAplicativoController.create);
app.get('/api/catalogo-aplicativo', catalogoAplicativoController.getAll);
app.get('/api/catalogo-aplicativo/:id', catalogoAplicativoController.getById);
app.put('/api/catalogo-aplicativo/:id', catalogoAplicativoController.update);
app.delete('/api/catalogo-aplicativo/:id', catalogoAplicativoController.delete);

// TerminalModelo CRUD
app.post('/api/terminal-modelo', terminalModeloController.create);
app.get('/api/terminal-modelo', terminalModeloController.getAll);
app.get('/api/terminal-modelo/:id', terminalModeloController.getById);
app.put('/api/terminal-modelo/:id', terminalModeloController.update);
app.delete('/api/terminal-modelo/:id', terminalModeloController.delete);

app.get('/api/imagem/:id', imagemController.getById);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
