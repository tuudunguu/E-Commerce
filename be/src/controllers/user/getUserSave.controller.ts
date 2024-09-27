import { RequestHandler } from 'express';
import { userModel } from '../../models';

export const getUserSaveController: RequestHandler = async (req, res) => {
  try {
    const userSaveData = await userModel.findOne({_id: req.params.id}).populate('Product');

    console.log(userSaveData)

    res.json(userSaveData);
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
