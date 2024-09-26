import { RequestHandler } from 'express';
import { userModel } from '../../models/user.schema';
import { getMe } from './me-controller';


export const updateLikeController: RequestHandler = async (req, res) => {
  try {
   

    const { id } = req.body;
   await userModel.updateOne({
    _id: 
   }, {
    likes: {$push: id}
   });

    return res.status(201).json({
      message: 'likes updated successfully',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};