import { Request, Response } from 'express';
import UsuarioService from '../services/UsuarioService';

class UsuarioController {
  static async listarUsuarios(req: Request, res: Response) {
    const usuarios = await UsuarioService.listarUsuarios();
    res.json(usuarios);
  }

  // Outros métodos CRUD...
}

export default UsuarioController;