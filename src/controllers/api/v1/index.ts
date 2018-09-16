import { Router } from 'express';
import { HomeController } from './home/home.controller';
import { UserController } from './user/user.controller';
import { AdminController } from './admin/admin.controller';
import { AuthenticationController } from './authentication/authentication.controller';

const router: Router = Router();

router.use('/', HomeController);
router.use('/user', UserController);
router.use('/admin', AdminController);
router.use('/auth', AuthenticationController);

export const v1: Router = router;
