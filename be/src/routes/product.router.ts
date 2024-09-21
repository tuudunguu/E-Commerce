import { Router } from 'express';
import {
  getProductController,
  createProductController,
} from '../controllers/product';

const productRouter = Router();

productRouter.get('/get', getProductController);
productRouter.post('/create', createProductController);

export { productRouter };
