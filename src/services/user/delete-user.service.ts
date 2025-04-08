import { CustomError } from 'utils';

import { deleteUserModel } from '../models';

export const deleteUserService = async (id: number) => {
  try {
    const product = await deleteUserModel(id);

    if (!product) {
      throw new CustomError('User not found', 404);
    }

    return { message: `User Id ${id} deleted successfully` };
  } catch (error) {
    const err = error as CustomError;

    throw new CustomError(String(err), err?.statusCode || 400);
  }
};