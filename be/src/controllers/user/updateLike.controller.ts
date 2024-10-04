import { RequestHandler } from 'express';
import { userModel } from '../../models/user.schema';

export const updateLikeController: RequestHandler = async (req, res) => {
  try {
    const { id, user } = req.body; 
    const userId = user.id; // Assumes the user ID is passed in req.body.user

    if (!userId || !id) {
      return res.status(400).json({
        message: 'User ID or product ID is missing',
      });
    }

    // Find the user and check if the product is already liked
    const userDoc = await userModel.findById(userId);
    if (!userDoc) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    const isLiked = userDoc.likes.includes(id);

    let result;
    if (isLiked) {
      // If already liked, remove it (unlike)
      result = await userModel.updateOne(
        { _id: userId },
        { $pull: { likes: id } } // Remove product from likes array
      );
      return res.status(200).json({
        message: 'Product ID removed from likes',
      });
    } else {
      // If not liked, add it
      result = await userModel.updateOne(
        { _id: userId },
        { $push: { likes: id } } // Add product to likes array
      );
      return res.status(201).json({
        message: 'Product ID added to likes successfully',
      });
    }
  } catch (error) {
    console.error('Error updating likes:', error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};


