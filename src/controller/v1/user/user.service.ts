import { NextFunction, Request, Response } from 'express';
import User from '@model/user.model';

export const getAllUser = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json(await User.find({}).limit(100));
  } catch (e) {
    return next(e);
  }
};
