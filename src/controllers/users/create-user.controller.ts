import { Response } from 'express';

import { CreateUserRequest } from './create-user.types';
import { createUser } from '../../models/user';

export const createUserController = async (req: CreateUserRequest, res: Response) => {
  try {
    const { name, email } = req.body;

    const user = await createUser(name, email);

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : 'An unknown error occurred' });
  }
};
