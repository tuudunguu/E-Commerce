import { Request, Response } from 'express';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface AuthenticatedRequest extends Request {
  user?: User;
}

const getMe = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const user = req.user;

    console.log('user:', user);

    res.json(user);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getMe };
