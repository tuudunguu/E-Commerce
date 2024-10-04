import { RequestHandler } from 'express';
import { userModel } from '../../models/user.schema';

export const addProductToCartController: RequestHandler = async (req , res)=>{

    try{
        const {id , user} = req.body;
console.log("req.bodyyyyy:", id)

        const userId = user.id

        console.log("userIdddddd:" ,userId)

    if (!userId || !id) {
        return res.status(400).json({
            message: "User Id or Product Id is missing"
        })
    }

        await userModel.updateOne(
         {_id: userId},
         {$push: {cartProduct: id }}
       );
       return res.status(200).json({
        message: "Product Id added to cartProduct"
       })
    


} catch (error) {
    console.error("Error adding product to cart:" , error);
    return res.status(500).json({
        message: 'internal server error',
    });
}
}