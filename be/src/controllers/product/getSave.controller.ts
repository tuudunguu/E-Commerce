import { Request, Response } from 'express';
import { userModel } from '../../models'; 
import { User } from '../../middlewares/auth.middlewares';
import mongoose from 'mongoose'; // Import mongoose

declare global {
  namespace Express {
      interface Request {
          user: User
      }
  }
}

export const getSaveController = async (req: Request, res: Response) => {
  try {
    // Check if req.user._id exists
    if (!req.user || !req.user._id) {
      return res.status(400).json({ message: 'User ID is missing or invalid' });
    }

    const userId = req.user._id;

    // Fetch user data but don't populate yet
    const userSaveData = await userModel.findOne({ _id: userId });

    if (!userSaveData) {
      return res.status(404).json({ message: 'User data not found' });
    }

    // Filter out invalid ObjectIds from 'likes'
    const validLikes = userSaveData.likes.filter((like: any) => mongoose.Types.ObjectId.isValid(like));

    // If there are valid likes, populate them
    const populatedData = await userModel.findOne({ _id: userId }).populate({
      path: 'likes',
      match: { _id: { $in: validLikes } } // Only populate valid likes
    });

    // Respond with populated data
    res.json(populatedData);

  } catch (error) {
    console.error('Error retrieving user data:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
