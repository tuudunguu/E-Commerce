import { Router } from 'express';
import {
  loginUserController,
  createUserController,
  getUserByIdController,
} from '../controllers';

const userRouter = Router();

userRouter
  .post('/create', createUserController)
  .post('/login', loginUserController)
  .get('/:id', getUserByIdController);

export { userRouter };
