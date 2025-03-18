import { Request, Response } from 'express';
import { getUsers } from 'models';

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: String(err) }); // Use String constructor with `new`
  }
};
