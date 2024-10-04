import { Request , Response } from "express";
import { userModel } from "../../models";
import { User} from '../../middlewares/auth.middlewares'

declare global {
    namespace Express {
        interface Request {
            user: User
        }
    }
  }

export const getProductCart = async(req:Request , res:Response)=>{

    try {

        const userId = req.user.id
        const populateData = await userModel.findOne({_id: userId}).populate("cartProduct");

        res.json(populateData?.cartProduct)

        console.log("populateData:" , populateData)
    }catch (error) {
        console.error('Error retrieving user data:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }





    
}