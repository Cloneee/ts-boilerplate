import { Router, Response, Request } from 'express';
import UserRouter from './user/user.router';
import AuthRouter from "@controller/v1/auth/auth.router";

const router = Router();

// v1 api router
router.use('/user', UserRouter);
router.use('/auth', AuthRouter);

router.route('/').get((_req: Request, res: Response) => {
  return res.json({ msg: 'Player dual account manager API v1' });
});

export default router;
