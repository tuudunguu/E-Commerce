import { Router } from 'express';
import {
  loginUserController,
  createUserController,
  getUserByIdController,
  updateLikeController,
  getUserSaveController
} from '../controllers/user';

const authRouter = Router();

authRouter
.post('/create', createUserController)
.post('/login', loginUserController)
.post('/updateLike', updateLikeController)
.get('/savedProduct/:id', getUserSaveController) 
.get('/:id', getUserByIdController)

export { authRouter };
