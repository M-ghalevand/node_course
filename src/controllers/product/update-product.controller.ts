import { Response } from 'express';

import { UpdateProductRequest } from './update-product.types';
import { createUser } from '../../models/user';

export const updateProductController = async (req: UpdateProductRequest, res: Response) => {
  try {
    const { title, price } = req.body;

    const product = await createUser(title, price);

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : 'An unknown error occurred' });
  }
};
