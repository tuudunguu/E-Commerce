import { Request, Response, NextFunction } from 'express'; // Import types
import jwt, { JwtPayload } from 'jsonwebtoken'; // Import JWT

// Extend Request type to include user property
interface AuthRequest extends Request {
  user?: JwtPayload;
}

// Middleware to verify JWT tokens
const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.path.startsWith('/auth')) return next(); // Skip auth for "/auth" routes

  const token = req.headers.authorization?.split(' ')[1]; // Extract token from header
  if (!token) return res.status(401).json({ error: 'Please log in!' }); // No token, respond 401

  try {
    req.user = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload; // Verify token
    next(); // Continue if valid
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token!' }); // Invalid token, respond 401
  }
};

export { authMiddleware }; // Export middleware
