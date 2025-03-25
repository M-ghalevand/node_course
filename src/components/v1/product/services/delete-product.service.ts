import { CustomError } from 'utils';

import { deleteProductModel } from '../models';

export const deleteProductService = async (id: number) => {
  try {
    const product = await deleteProductModel(id);

    if (!product) {
      throw new CustomError('Product not found', 404);
    }

    return { message: `Product Id ${id} deleted successfully`, status: 200 };
  } catch (err) {
    throw new CustomError(String(err), 400);
  }
};
