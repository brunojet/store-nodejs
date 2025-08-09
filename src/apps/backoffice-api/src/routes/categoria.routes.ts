import { Router } from 'express';
import { CategoriaController } from '../controllers/categoria.controller';
import { TipoCategoriaController } from '../controllers/tipocategoria.controller';

const router = Router();
const categoriaController = new CategoriaController();
const tipoCategoriaController = new TipoCategoriaController();

// Rotas TipoCategoria
router.get('/tipocategorias', tipoCategoriaController.listar.bind(tipoCategoriaController));
router.post('/tipocategorias', tipoCategoriaController.criar.bind(tipoCategoriaController));
router.get('/tipocategorias/:id', tipoCategoriaController.buscarPorId.bind(tipoCategoriaController));
router.put('/tipocategorias/:id', tipoCategoriaController.atualizar.bind(tipoCategoriaController));
router.delete('/tipocategorias/:id', tipoCategoriaController.remover.bind(tipoCategoriaController));

// Rotas Categoria
router.get('/categorias', categoriaController.listar.bind(categoriaController));
router.post('/categorias', categoriaController.criar.bind(categoriaController));
router.get('/categorias/:id', categoriaController.buscarPorId.bind(categoriaController));
router.put('/categorias/:id', categoriaController.atualizar.bind(categoriaController));
router.delete('/categorias/:id', categoriaController.remover.bind(categoriaController));

export { router as categoriaRoutes };
