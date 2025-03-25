import { Products } from '@prisma/client';

import { createProductModel } from '../models';

export const createProductService = async (body: Pick<Products, 'title' | 'price' | 'user_id'>) => {
  try {
    const { title, price, user_id } = body;

    return await createProductModel({ title, price, user_id });
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'An unknown error occurred', status: 500 };
  }
};
