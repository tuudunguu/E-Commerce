import { RequestHandler } from 'express';
import { userModel } from '../models/user.schema';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getUserController: RequestHandler = async (req, res) => {
  console.log('Received request:', req.body); // Debugging request body

  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ message: 'Missing credentials' });
  }

  console.log('login name', name); // Debugging name value

  try {
    const user = await userModel.findOne({ name });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { username: user.name, email: user.email, id: user._id },
      process.env.JWT_SECRET as string
    );

    return res
      .status(200)
      .json({
        message: 'Login successful',
        token,
        user: { username: user.name, email: user.email, id: user._id },
      });
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
