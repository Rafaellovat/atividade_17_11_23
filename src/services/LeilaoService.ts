import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LeilaoService {
  static async listarLeiloes() {
    return prisma.leilao.findMany();
  }

  // Outros métodos CRUD...
}

export default LeilaoService;