import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './database';
import { userRouter } from './routes';
import { authMiddleware } from './middlewares/auth.middlewares';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

connectToDatabase();

const app = express();

app.use(cors());
app.use(express.json());
// app.use(authMiddleware);

app.use('/user', userRouter);

app.listen(3001, () => {
  console.log('server is running on http://localhost:3001');
});
