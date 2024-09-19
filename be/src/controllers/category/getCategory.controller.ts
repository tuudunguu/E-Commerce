import { RequestHandler } from 'express';
import { categoryModel } from '../../models';

export const getCategoryController: RequestHandler = async (req, res) => {
  try {
    const categoriesData = await categoryModel.find();

    res.json(categoriesData);
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
