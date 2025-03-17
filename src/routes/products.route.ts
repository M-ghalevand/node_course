import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  getProductsController,
  updateProductController
} from 'controllers';
import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/', getProductsController);
productsRouter.post('/', createProductController);
productsRouter.get('/:id', getProductByIdController);
productsRouter.delete('/:id', deleteProductController);
productsRouter.put('/:id', updateProductController);

export default productsRouter;
