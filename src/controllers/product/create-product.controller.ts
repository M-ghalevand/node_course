import { Response } from 'express';

import { CreateProductRequest } from './create-product.types';
import { createProduct } from '../../models/product';

export const createProductController = async (req: CreateProductRequest, res: Response) => {
  try {
    const { title, price, user_id } = req.body;

    const product = await createProduct(title, price, user_id);

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : 'An unknown error occurred' });
  }
};
