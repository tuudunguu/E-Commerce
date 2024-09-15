import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

// Define the type for the request object with the user property
interface AuthenticatedRequest extends Request {
  user?: JwtPayload; // Use JwtPayload as the type
}

// Define the type for JWT payload if you have specific fields
interface UserPayload {
  id: string;
  name: string;
  email: string;
}

// Middleware function to protect routes by verifying JWT tokens
const authMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  // Skip authentication for routes that start with "/auth"
  if (req.path.startsWith('/auth')) return next();

  // Extract token from Authorization header
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1]; // Get the token part of "Bearer <token>"

  // If no token is provided, respond with a 401 Unauthorized status
  if (!token) {
    return res.status(401).json({ error: 'Please log in!' });
  }

  try {
    // Verify the token using the secret key
    const user = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload; // Type assertion

    // Attach the user information to the request object
    req.user = user;

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    // If token verification fails, respond with a 401 Unauthorized status
    return res.status(401).json({ error: 'Invalid or expired token!' });
  }
};

export { authMiddleware };
