import { Request, Response } from 'express';
import { userModel } from '../../models'; 
import { User } from '../../middlewares/auth.middlewares';


declare global {
  namespace Express {
      interface Request {
          user: User
      }
  }
}

export const getSaveController = async (req: Request, res: Response) => {
  try {
    
console.log("req.user:", req.user.id)

    const userId = req.user.id;
     const populatedData = await userModel.findOne({ _id: userId }).populate("likes");

    

    res.json(populatedData?.likes);

  } catch (error) {
    console.error('Error retrieving user data:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
