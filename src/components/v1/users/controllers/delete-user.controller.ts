import { Request, Response } from 'express';

import { deleteUserService } from '../services';

export const deleteUserController = async (req: Request, res: Response) => {
  const result = await deleteUserService(Number(req?.params?.id));

  res.json(result);
};
