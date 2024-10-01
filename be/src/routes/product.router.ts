import { Router } from 'express';
import {
  getProductController,
  createProductController,
  getProductsController,
  getSaveController
} from '../controllers/product';


const productRouter = Router();

productRouter.get('/', getProductsController)
productRouter.get('/:id', getProductController);
productRouter.post('/create', createProductController);
productRouter.get('/savedProduct', getSaveController) 

export { productRouter };
