import express from 'express';
import LeilaoController from '../controllers/LeilaoController';

const router = express.Router();

router.get('/leiloes', LeilaoController.listarLeiloes);
// Defina outras rotas para CRUD...

export default router;