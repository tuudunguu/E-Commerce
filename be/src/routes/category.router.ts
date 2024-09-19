import { Router } from 'express';
import {
  getCategoryController,
  createCategoryController,
} from '../controllers/category';

const categoryRouter = Router();

categoryRouter.get('/get', getCategoryController);
categoryRouter.post('/create', createCategoryController);

export { categoryRouter };
