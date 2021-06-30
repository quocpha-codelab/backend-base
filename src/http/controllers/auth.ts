import { Request, Response } from 'express';

import * as authService from '../services/auth';
import { APP, Post } from '../../helper/decorator';
import { validate } from '../../helper/validate';
import { signInSchema } from '../../validators/auth';

@APP('/auth')
export default class UserController {
  @Post('/sign-in')
  async signIn(req: Request, res: Response): Promise<void> {
    const params = {
      username: req.body.username,
      password: req.body.password,
    };

    const formatParams = await validate(signInSchema, params);

    const responseData = await authService.signIn(formatParams);
    res.status(200).send(responseData);
  }
}
