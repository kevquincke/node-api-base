import { Request, Response, NextFunction } from 'express';
import winston from 'winston';

export const exceptionMiddleware = (err: any, req: Request, res: Response, next: NextFunction): void => {
  winston.error(err.message, err);

  res.status(500).send('Please try again later');
};
