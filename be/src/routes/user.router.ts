import { Router } from 'express';
import {
  getUserController,
  createUserController,
  getUserByIdController,
} from '../controllers';

const userRouter = Router();

userRouter
  .post('/create', createUserController)
  .get('/get', getUserController)
  .get('/:id', getUserByIdController);

export { userRouter };
