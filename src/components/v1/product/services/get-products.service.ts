import { getProductsModel } from '../models';

export const getProductsService = async () => {
  try {
    return await getProductsModel();
  } catch (err) {
    return { message: String(err), status: 500 };
  }
};
