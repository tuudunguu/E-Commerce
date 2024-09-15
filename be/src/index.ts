import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './database';
import { userRouter } from './routes';
import { authMiddleware } from './controllers/middlewares/auth.middlewares';

connectToDatabase();

const app = express();

app.use(cors());
app.use(express.json());
app.use(authMiddleware);

app.use('/user', userRouter);

app.listen(3001, () => {
  console.log('server is running on http://localhost:3001');
});
