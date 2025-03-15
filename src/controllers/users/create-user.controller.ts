import { Request, Response } from 'express';

import { createUser } from '../../models/user';

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    console.log('=>(create-user.controller.ts:8) name: ', name);

    const user = await createUser(name, email);

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : 'An unknown error occurred' });
  }
};
