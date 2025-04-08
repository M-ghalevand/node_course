import { Request, Response } from 'express';
import { deleteProductModel } from 'models';

export const deleteProductController = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const product = await deleteProductModel(Number(req?.params?.id));

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: `Product Id ${req?.params?.id} deleted successfully` });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
