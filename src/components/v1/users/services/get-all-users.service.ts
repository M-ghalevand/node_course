import { getUsersModel } from '../models';

export const getAllUsersService = async () => {
  try {
    return await getUsersModel();
  } catch (err) {
    return { message: String(err) };
  }
};
