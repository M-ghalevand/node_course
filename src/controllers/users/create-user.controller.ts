import { Response } from 'express';
import { createUserModel } from 'models';

import { CreateUserRequest } from './create-user.controller.types';

export const createUserController = async (req: CreateUserRequest, res: Response) => {
  try {
    const { name, email } = req.body;

    const user = await createUserModel({ name, email });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : 'An unknown error occurred' });
  }
};
