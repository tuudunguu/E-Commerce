import { Router } from 'express';

import { getMe } from '../controllers/me-controller';

export const userRouter = Router();

userRouter.get('/me', getMe);
