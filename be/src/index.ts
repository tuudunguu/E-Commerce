import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './database';
import { userRouter } from './routes';

connectToDatabase();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Hello world' });
});

app.use('/user', userRouter);

app.listen(3001, () => {
  console.log('server is running on http://localhost:3001');
});
