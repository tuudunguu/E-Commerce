import { Router } from 'express';
import {
  getProductController,
  createProductController,
  getProductsController,
  getSaveController
} from '../controllers/product';


const productRouter = Router();

productRouter.get('/', getProductsController)
productRouter.get('/savedProduct', getSaveController) 
productRouter.post('/create', createProductController);
productRouter.get('/:id', getProductController);

export { productRouter };
