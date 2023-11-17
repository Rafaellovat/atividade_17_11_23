import express from 'express';
import LanceController from '../controllers/LanceController';

const router = express.Router();

router.get('/lances', LanceController.listarLances);
// Defina outras rotas para CRUD...

export default router;
