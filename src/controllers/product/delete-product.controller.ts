import { Request, Response } from 'express';

import { deleteProduct } from '../../models/product';

export const deleteProductController = async (req: Request, res: Response) => {
  try {
    const product = await deleteProduct(req?.params?.id);

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: `Product Id ${req?.params?.id} deleted successfully` });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
