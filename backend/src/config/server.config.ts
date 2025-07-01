import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT ?? "5000";

app.use(express.json());
app.use(cors());
app.use(helmet());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access it at http://localhost:${PORT}`);
});