import { Request, Response } from 'express';

import { getAllUsersService } from '../services';

export const getAllUsersController = async (req: Request, res: Response) => {
  const result = await getAllUsersService();

  res.json(result);
};
