import { CustomError } from 'utils';

import { getUserByIdModel } from '../models';

export const getUserByIdService = async (id: number) => {
  try {
    const user = await getUserByIdModel(id);

    if (!user) {
      throw new CustomError('User not found', 400);
    }

    return user;
  } catch (err) {
    throw new CustomError(String(err), 400);
  }
};
