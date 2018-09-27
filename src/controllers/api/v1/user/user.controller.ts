import { Router, Request, Response } from 'express';
import { validate } from 'class-validator';
import * as _ from 'lodash';

import { User } from '../../../../models/user';
import { getValidationErrors } from '../../../../utils/ModelValidation';

const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
  let user: User = await User.findOne({ email: req.body.email });

  if (user) {
    return res.status(400).send('Email already in use');
  }

  user = new User(req.body);

  const errors = await validate(user);

  if (!_.isEmpty(errors)) {
    return res.status(400).send(getValidationErrors(errors));
  }

  user = await user.save();

  res.header('x-auth-token', user.token).send(_.pick(user, ['id', 'email']));
});

export const UserController: Router = router;
