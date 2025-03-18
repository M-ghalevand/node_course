import { Request, Response } from 'express';
import { getProducts } from 'models';

export const getProductsController = async (req: Request, res: Response) => {
  try {
    const users = await getProducts();

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: String(err) }); // Use String constructor with `new`
  }
};
