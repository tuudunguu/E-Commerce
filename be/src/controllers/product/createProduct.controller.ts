import { RequestHandler } from 'express';
import { ProductModel } from '../../models';

export const createProductController: RequestHandler = async (req, res) => {
  try {
    const { productName, description, images, price, mainCategory, sizes } =
      req.body;

    const sumOfSizesQuantity = sizes.reduce(
      (total: number, size: { quantity: number }) => {
        return total + size.quantity;
      },
      0
    );

    const numericPrice = parseInt(price, 10);

    console.log('req.body:', req.body);

    await ProductModel.create({
      name: productName,
      description: description,
      category: mainCategory,
      sizes: sizes,
      price: numericPrice,
      images: images,
      quantity: sumOfSizesQuantity,
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
