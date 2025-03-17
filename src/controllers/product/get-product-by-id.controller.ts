import { Request, Response } from 'express';

import { getProductById } from '../../models/product';

export const getProductByIdController = async (req: Request, res: Response) => {
  try {
    const user = await getProductById(req.params.id);

    if (!user) {
      res.status(404).json({ message: 'Product not found' });
    }
    res.end(user);
  } catch (err) {
    res.status(500).end(JSON.stringify({ error: err instanceof Error ? err.message : 'An unknown error occurred' }));
  }
};
