import { Request, Response } from 'express';

import { createUserService } from '../services';

export const createUserController = async (req: Request, res: Response) => {
  const result = await createUserService(req.body);

  res.status(201).json(result);
};
