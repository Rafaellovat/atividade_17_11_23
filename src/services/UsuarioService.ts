import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UsuarioService {
  static async listarUsuarios() {
    return prisma.usuario.findMany();
  }

  // Outros métodos CRUD...
}

export default UsuarioService;