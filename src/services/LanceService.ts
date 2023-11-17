import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LanceService {
  static async listarLances() {
    return prisma.lance.findMany();
  }

  // Outros métodos CRUD...
}

export default LanceService;