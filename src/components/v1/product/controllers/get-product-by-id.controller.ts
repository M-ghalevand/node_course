import { Request, Response } from 'express';

import { getProductByIdService } from '../services';

export const getProductByIdController = async (req: Request, res: Response) => {
  const result = await getProductByIdService(Number(req.params.id));

  res.end(result);
};
