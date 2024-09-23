import { RequestHandler } from 'express';
import { ProductModel } from '../../models';

export const getProductController: RequestHandler = async (req, res) => {
  try {
    const productsData = await ProductModel.find({}).populate('category');

    res.json(productsData);
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
