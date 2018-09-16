import { Request, Response, NextFunction } from 'express';

import User, { UserRole } from '../models/user';

export const adminMiddleware = (req: Request, res: Response, next: NextFunction): Response => {
  const user: User = (req as any).user;

  if (user.role !== UserRole.Admin) {
    return res.status(403).send('Access denied');
  }

  next();
};
