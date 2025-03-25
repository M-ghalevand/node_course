import { Request, Response } from 'express';

import { getProductsService } from '../services';

export const getProductsController = async (req: Request, res: Response) => {
  const result = await getProductsService();

  res.end(result);
};
