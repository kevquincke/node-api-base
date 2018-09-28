import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { AUTH_HEADER } from 'constants/constants';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token: string = req.header(AUTH_HEADER);

  if (!token) {
    res.status(401).send('Access denied. No token provided.');
  }

  try {
    (req as any).user = jwt.verify(token, process.env.JWT_KEY);
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
};
