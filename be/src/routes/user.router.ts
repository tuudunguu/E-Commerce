import { Router } from 'express';
import {
  loginUserController,
  createUserController,
  getUserByIdController,
  updateLikeController,
} from '../controllers/user';

const authRouter = Router();

authRouter
.post('/create', createUserController)
.post('/login', loginUserController)
.post('/updateLike', updateLikeController)
.get('/:id', getUserByIdController)

export { authRouter };
