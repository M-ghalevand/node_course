import { Products } from '@prisma/client';

import { updateProductModel } from '../models';

export const updateProductService = async (body: Pick<Products, 'title' | 'price'>, id: number) => {
  try {
    const { title, price } = body;

    const product = await updateProductModel({ id, title, price });

    if (!product) {
      return { message: 'Product not found', status: 404 };
    }

    return product;
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'An unknown error occurred', status: 500 };
  }
};
