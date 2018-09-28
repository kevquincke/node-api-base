import { Request, Response, Router } from 'express';
import { validate } from 'class-validator';
import * as _ from 'lodash';
import bcrypt from 'bcrypt';

import { User } from 'models/user';
import { AUTH_HEADER } from 'constants/constants';

const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  let user = new User(req.body);
  const errors = await validate(user);

  if (!_.isEmpty(errors)) {
    return res.status(400).send('Email or password incorrect');
  }

  user = await User.findOne({ email });

  if (!user) {
    return res.status(400).send('Email or password incorrect');
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(400).send('Email or password incorrect');
  }

  res.header(AUTH_HEADER, user.token).status(204).send();
});

export const AuthenticationController: Router = router;
