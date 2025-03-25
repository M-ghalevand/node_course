import { Request, Response } from 'express';

import { getUserByIdService } from '../services';

export const getUserByIdController = async (req: Request<{ id: string }>, res: Response) => {
  const result = await getUserByIdService(Number(req.params.id));

  res.end(result);
};
