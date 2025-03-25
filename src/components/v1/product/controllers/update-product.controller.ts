import { Products } from '@prisma/client';
import { Request, Response } from 'express';

import { updateProductService } from '../services';

export const updateProductController = async (req: Request<{ id: string }, {}, Pick<Products, 'title' | 'price'>>, res: Response) => {
  const result = await updateProductService(req.body, Number(req.params.id));

  res.json(result);
};
