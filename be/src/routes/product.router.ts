import { Router } from 'express';
import {
  getProductController,
  createProductController,
  getProductsController
} from '../controllers/product';

const productRouter = Router();

productRouter.get('/', getProductsController)
productRouter.get('/:id', getProductController);
productRouter.post('/create', createProductController);

export { productRouter };
