import { CustomError } from 'utils';

import { getUsersModel } from '../models';

export const getAllUsersService = async () => {
  try {
    return await getUsersModel();
  } catch (err) {
    throw new CustomError(String(err), 400);
  }
};
