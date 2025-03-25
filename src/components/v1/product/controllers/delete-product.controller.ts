import { Request, Response } from 'express';

import { deleteProductService } from '../services';

export const deleteProductController = async (req: Request<{ id: string }>, res: Response) => {
  const result = await deleteProductService(Number(req.params.id));

  res.json(result);
};
