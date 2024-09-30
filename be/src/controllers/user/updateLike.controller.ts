import { RequestHandler } from 'express';
import { userModel } from '../../models/user.schema';

export const updateLikeController: RequestHandler = async (req, res) => {
  try {
    const { id, user } = req.body; 
    const userId = user.id; 

  

    if (!userId || !id) {
      return res.status(400).json({
        message: 'User ID or product ID is missing',
      });
    }

  
    const result = await userModel.updateOne(
      { _id: userId }, 
      { $push: { likes: id } } 
    );

    return res.status(201).json({
      message: 'Product ID added to likes successfully',
    });
  } catch (error) {
    console.error('Error updating likes:', error); 
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

