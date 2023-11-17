import { Request, Response } from 'express';
import LanceService from '../services/LanceService';

class LanceController {
  static async listarLances(req: Request, res: Response) {
    const lances = await LanceService.listarLances();
    res.json(lances);
  }

  // Outros métodos CRUD...
}

export default LanceController;