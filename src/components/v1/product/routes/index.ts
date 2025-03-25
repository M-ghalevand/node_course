import { Router } from 'express';
import { validate } from 'middlewares';

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
productsRouter.post('/', validate(createProductValidator), createProductController);
productsRouter.get('/:id', getProductByIdController);
productsRouter.delete('/:id', deleteProductController);
productsRouter.put('/:id', validate(updateProductValidator), updateProductController);

export default productsRouter;
