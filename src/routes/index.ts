import { Router } from 'express';

import productsRouter from './products.route';
import usersRoutes from './users.route';

const router = Router();

router.use('/users', usersRoutes);
router.use('/products', productsRouter);

export default router;
