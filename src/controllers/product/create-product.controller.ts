import { Request, Response } from 'express';

import { createProduct } from './product.service';

export const createProductController = async (req: Request, res: Response) => {
  const result = await createProduct(req.body);

  res.json(result);
};
