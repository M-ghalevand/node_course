import { CustomError } from 'utils';

import { getProductByIdModel } from '../models';

export const getProductByIdService = async (id: number) => {
  try {
    const user = await getProductByIdModel(id);

    if (!user) {
      throw new CustomError('Product not found', 404);
    }

    return user;
  } catch (error) {
    const err = error as CustomError;

    throw new CustomError(String(err), err?.statusCode || 400);
  }
};