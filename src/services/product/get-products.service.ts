import { CustomError } from 'utils';

import { getProductsModel } from '../models';

export const getProductsService = async () => {
  try {
    return await getProductsModel();
  } catch (err) {
    throw new CustomError(String(err), 400);
  }
};