import { getUserByIdModel } from '../models';

export const getUserByIdService = async (id: number) => {
  try {
    const user = await getUserByIdModel(id);

    if (!user) {
      return { message: 'User not found', status: 404 };
    }

    return user;
  } catch (err) {
    return { message: err instanceof Error ? err.message : 'An unknown error occurred', status: 500 };
  }
};
