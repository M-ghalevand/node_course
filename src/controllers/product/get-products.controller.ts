import { Request, Response } from 'express';
import { getProductsModel } from 'models';

export const getProductsController = async (req: Request, res: Response) => {
  try {
    const users = await getProductsModel();

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: String(err) });
  }
};
