import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHedder = req.headers.authorization;
  if (authorization!) { 
    return res.status(401).json({ message: "Unauthorized ❌"});
  }

  const token = authHedder.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded;
    next();
  }
  catch (err) {
    res.status(401).json({ message: "Invalid token ❌" })
  }
}
