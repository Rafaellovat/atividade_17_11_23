import express from 'express';
import UsuarioController from '../controllers/UsuarioController';

const router = express.Router();

router.get('/usuarios', UsuarioController.listarUsuarios);
// Defina outras rotas para CRUD...

export default router;