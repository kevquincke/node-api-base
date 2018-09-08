import { Router, Request, Response } from 'express';

const router: Router = Router();
const pkg = require('../../../../../package.json');

router.get('', (req: Request, res: Response) => {
  res.render('index', {
    title: pkg.name,
    description: `Description: ${pkg.description}`,
    version: `Version: ${pkg.version}`
  });
});

export const HomeController: Router = router;
