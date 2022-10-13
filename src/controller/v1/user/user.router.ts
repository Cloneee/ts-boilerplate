import { Request, Response, Router } from 'express';
import { getAllUser } from "@controller/v1/user/user.service";

const router = Router();

router
  .route('/')
  .get(getAllUser)
  .post((_req: Request, res: Response) => {
    return res.json({ msg: 'Post user', data: _req.body.data });
  });


export default router;
