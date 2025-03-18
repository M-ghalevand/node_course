import { Request, Response } from 'express';
import { deleteUserModel } from 'models';

export const deleteUserController = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const product = await deleteUserModel(Number(req?.params?.id));

    if (!product) {
      res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: `User Id ${req?.params?.id} deleted successfully` });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
