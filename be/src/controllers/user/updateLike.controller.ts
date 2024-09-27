import { RequestHandler } from 'express';
import { userModel } from '../../models/user.schema';

export const updateLikeController: RequestHandler = async (req, res) => {
  try {
    const { id, user } = req.body; // Assume `id` is the product ID to be liked
    const userId = user.id; // Extract user ID from the authenticated request

    console.log('userId:', userId);

    if (!userId || !id) {
      return res.status(400).json({
        message: 'User ID or product ID is missing',
      });
    }

    // Use MongoDB's $push to add the product ID to the user's likes array
    const result = await userModel.updateOne(
      { _id: userId }, // Find the user by their ID from JWT
      { $push: { likes: id } } // Add the product ID to the likes array (duplicates allowed)
    );

    return res.status(201).json({
      message: 'Product ID added to likes successfully',
    });
  } catch (error) {
    console.error('Error updating likes:', error); // Log the error for debugging
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

