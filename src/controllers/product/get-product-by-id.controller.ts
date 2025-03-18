import { Request, Response } from 'express';
import { getProductById } from 'models';

export const getProductByIdController = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const user = await getProductById(Number(req.params.id));

    if (!user) {
      res.status(404).json({ message: 'Product not found' });
    }
    res.end(user);
  } catch (err) {
    res.status(500).end(JSON.stringify({ error: err instanceof Error ? err.message : 'An unknown error occurred' }));
  }
};
