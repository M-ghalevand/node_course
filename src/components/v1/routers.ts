import { Router } from 'express';

import productsRouter from './product/routes';
import usersRouter from './users/routes';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', usersRouter);

export default router;
