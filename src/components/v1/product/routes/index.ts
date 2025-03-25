import { Router } from 'express';
import { validateMiddleware } from 'middlewares';

import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  getProductsController,
  updateProductController
} from '../controllers';
import { createProductValidator, updateProductValidator } from '../validators';

const productsRouter = Router();

productsRouter.get('/', getProductsController);
productsRouter.post('/', validateMiddleware(createProductValidator), createProductController);
productsRouter.get('/:id', getProductByIdController);
productsRouter.delete('/:id', deleteProductController);
productsRouter.put('/:id', validateMiddleware(updateProductValidator), updateProductController);

export default productsRouter;
