import { Router, Request, Response } from "express";
import { validate } from "class-validator";
import * as _ from "lodash";

import { User } from "../../../../models/User";
import { getValidationErrors } from "../../../../utils/ModelValidation";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const users = await User.find();
  res.send(users);
});

router.post("/", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  let user = new User();

  user.username = username;
  user.password = password;

  const errors = await validate(user);

  if (!_.isEmpty(errors)) {
    return res.status(400).send(getValidationErrors(errors));
  }

  user = await user.save();

  res.send(user);
});

export const UserController: Router = router;
