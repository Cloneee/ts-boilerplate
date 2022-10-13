import { Request, Response } from 'express';
import { HttpError } from 'http-errors';

const errorHandler = (
  error: HttpError,
  _req: Request,
  res: Response,
) => {
  try {
    return res.status(error.statusCode).json({ msg: error.message });
  } catch (_err) {
    return res.status(500).json({ msg: 'Unexpected error from server' });
  }
};

export default errorHandler;
