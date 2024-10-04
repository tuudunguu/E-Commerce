import { Router } from "express";
import { addProductToCartController , deleteProductToCartController , getProductCart} from "../controllers/cart";


export const buySteps = Router()


buySteps.post('/addProductCart' , addProductToCartController)
buySteps.post('deleteProductCart' , deleteProductToCartController)
buySteps.get('getProductCart', getProductCart )