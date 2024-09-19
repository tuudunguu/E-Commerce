import { Router } from 'express';
import {
  loginUserController,
  createUserController,
  getUserByIdController,
} from '../controllers/user';

const authRouter = Router();

authRouter
  .post('/create', createUserController)
  .post('/login', loginUserController)
  .get('/:id', getUserByIdController);

export { authRouter };
