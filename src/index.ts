import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes';
import leilaoRoutes from './routes/leilaoRoutes';
import lanceRoutes from './routes/lanceRoutes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', usuarioRoutes);
app.use('/api', leilaoRoutes);
app.use('/api', lanceRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});