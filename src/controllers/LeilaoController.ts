import { Request, Response } from 'express';
import LeilaoService from '../services/LeilaoService';

class LeilaoController {
  static async listarLeiloes(req: Request, res: Response) {
    const leiloes = await LeilaoService.listarLeiloes();
    res.json(leiloes);
  }

  // Outros métodos CRUD...
}

export default LeilaoController;