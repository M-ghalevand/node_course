import { createProductModel } from 'models';

export function createProduct(body: CreateProductRequestBody) {
  {
    try {
      const { title, price, user_id } = req.body;

      const product = await createProductModel({ title, price, user_id });


    } catch (err) {
      res.status(500).json({ error: err instanceof Error ? err.message : 'An unknown error occurred' });
    }
}
