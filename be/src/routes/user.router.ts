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
  .get('/:id', getUserByIdController)
  .post('/updateLike', updateLikeController)
  .get("/savedProduct" ,getUserSaveController )

export { authRouter };
