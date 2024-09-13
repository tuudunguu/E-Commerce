import { RequestHandler } from 'express';
import { userModel } from '../models/user.schema';

export const createUserController: RequestHandler = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log('req.body:', req.body);

    await userModel.create({
      name: name,
      email: email,
      password: password,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return res.status(201).json({
      message: 'User created successfully',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};
