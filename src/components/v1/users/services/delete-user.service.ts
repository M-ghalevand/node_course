import { CustomError } from 'utils';

import { deleteUserModel } from '../models';

export const deleteUserService = async (id: number) => {
  try {
    const product = await deleteUserModel(id);

    if (!product) {
      throw new CustomError('User not found', 400);
    }

    return { message: `User Id ${id} deleted successfully` };
  } catch (err) {
    throw new CustomError(String(err), 400);
  }
};
