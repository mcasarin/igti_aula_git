import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';
require('dotenv').config(); // pega config das variaveis de ambiente definidas no arquivo .env

// Conectar no MongoDB com mongoose
(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://{$process.env.USERDB}':'{$process.env.PWDDB}@cluster0.uekma.mongodb.net/grades?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log('Erro de conexão ao Atlas');
  }
})();

const app = express();
app.use(express.json());
app.use(studentRouter);
app.listen(process.env.PORT, () => console.log('API iniciada'));
