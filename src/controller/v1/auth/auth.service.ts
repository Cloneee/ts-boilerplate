import { NextFunction, Request, Response } from 'express';
import User, { IUser } from '@model/user.model';

import { compare, hash } from '@helper/hash';
import createError from 'http-errors';

export const login = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const _User: IUser | undefined = await User.findOne({
      username: _req.body.username,
    });

    //Login error
    if (!_User) return next(new createError.Unauthorized('Username not found'));
    if (!compare(_req.body.password, _User.password))
      return next(new createError.Unauthorized('Wrong password'));

    //Login success
    return res.json({
      msg: 'Login success',
      data: {_id: _User._id}
    });
  } catch (e) {
    return next(e);
  }
};

export const register = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const hashPassword = hash(_req.body.password);
    const additions = {
      password: hashPassword,
      urlCode: _req.body.nickname,
    };
    if (await User.findOne({ username: _req.body.username }))
      return next(new createError.Unauthorized('Username already exist'));
    if (await User.findOne({ email: _req.body.email }))
      return next(new createError.Unauthorized('Email already exist'));
    const newUser = new User({ ..._req.body, ...additions });
    await newUser.save();
    return res.json({ msg: 'Register success' });
  } catch (e) {
    return next(e);
  }
};


