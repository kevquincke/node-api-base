import { Router, Request, Response } from 'express';
import pkg from '../../../../../package.json';

const router: Router = Router();

router.get('', (req: Request, res: Response) => {
  res.render('index', {
    title: pkg.name,
    description: `Description: ${pkg.description}`,
    version: `Version: ${pkg.version}`
  });
});

router.get('/status', (req: Request, res: Response) => {
  res.send({ online: true });
});

export const HomeController: Router = router;
