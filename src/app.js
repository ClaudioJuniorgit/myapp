import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import userRoutes from './routes.js';
import { AppDataSource } from './data-source.js';
const app = express();
const port = process.env.PORT;

AppDataSource.initialize().then(() => {
  console.log('Banco de dados conectado');
});

app.use(express.json());
app.use('/api', userRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
