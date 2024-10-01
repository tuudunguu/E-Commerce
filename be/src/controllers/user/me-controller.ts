import { Request, Response } from 'express';
import { User } from '../../middlewares/auth.middlewares';


declare global {
  namespace Express {
      interface Request {
          user: User
      }
  }
}

const getMe = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = req.user;
    console.log("user" , user )


    res.json(user);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getMe };
