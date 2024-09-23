import { RequestHandler } from 'express';
import { categoryModel } from '../../models';

export const createCategoryController: RequestHandler = async (req, res) => {
  try {
    const { name } = req.body;


    await categoryModel.create({
      name: name,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return res.status(201).json({
      message: 'category created successfully',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};
