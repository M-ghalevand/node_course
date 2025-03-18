import { Request, Response } from 'express';
import { getUsersModel } from 'models';

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsersModel();

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: String(err) });
  }
};
