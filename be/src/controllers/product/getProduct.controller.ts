import { RequestHandler } from 'express';
import { ProductModel } from '../../models';

export const getProductController: RequestHandler = async (req, res) => {
  try {
    const categoriesData = await ProductModel.find({}).populate('Category');

    res.json(categoriesData);
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
