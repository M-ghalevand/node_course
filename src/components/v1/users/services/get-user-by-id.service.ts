import { CustomError } from 'utils';

import { getUserByIdModel } from '../models';

export const getUserByIdService = async (id: number) => {
  try {
    const user = await getUserByIdModel(id);

    if (!user) {
      throw new CustomError('User not found', 404);
    }

    return user;
  } catch (error) {
    const err = error as CustomError;

    throw new CustomError(String(err), err?.statusCode || 400);
  }
};
