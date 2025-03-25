import { Products } from '@prisma/client';
import { Request, Response } from 'express';

import { createProductService } from '../services';

export const createProductController = async (req: Request<{}, {}, Pick<Products, 'title' | 'price' | 'user_id'>>, res: Response) => {
  const result = await createProductService(req.body);

  res.json(result);
};
