import { Router } from 'express';
import { HomeController } from './home/home.controller';
import { UserController } from './user/user.controller';

const router: Router = Router();

router.use('/', HomeController);
router.use('/user', UserController);

export const v1: Router = router;
