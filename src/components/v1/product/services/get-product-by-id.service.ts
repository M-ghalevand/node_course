import { getProductByIdModel } from '../models';

export const getProductByIdService = async (id: number) => {
  try {
    const user = await getProductByIdModel(id);

    if (!user) {
      return { message: 'Product not found', status: 404 };
    }

    return user;
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'An unknown error occurred', status: 500 };
  }
};
