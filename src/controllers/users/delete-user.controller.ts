import { Request, Response } from 'express';

import { deleteUser } from '../../models/user';

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const product = await deleteUser(req?.params?.id);

    if (!product) {
      res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: `User Id ${req?.params?.id} deleted successfully` });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
