import { Products } from '@prisma/client';
import { CustomError } from 'utils';

import { updateProductModel } from '../models';

export const updateProductService = async (body: Pick<Products, 'title' | 'price'>, id: number) => {
  try {
    const { title, price } = body;

    const product = await updateProductModel({ id, title, price });

    if (!product) {
      throw new CustomError('Product not found', 404);
    }

    return product;
  } catch (error) {
    const err = error as CustomError;

    throw new CustomError(String(err), err?.statusCode || 400);
  }
};
