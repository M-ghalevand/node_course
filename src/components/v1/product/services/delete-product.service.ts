import { deleteProductModel } from '../models';

export const deleteProductService = async (id: number) => {
  try {
    const product = await deleteProductModel(id);

    if (!product) {
      return { message: 'Product not found', status: 404 };
    }

    return { message: `Product Id ${id} deleted successfully`, status: 200 };
  } catch (err) {
    return { error: (err as Error).message, status: 500 };
  }
};
