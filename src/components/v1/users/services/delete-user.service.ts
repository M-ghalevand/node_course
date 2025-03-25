import { deleteUserModel } from '../models';

export const deleteUserService = async (id: number) => {
  try {
    const product = await deleteUserModel(id);

    if (!product) {
      return { message: 'User not found' };
    }

    return { message: `User Id ${id} deleted successfully` };
  } catch (err) {
    return { error: (err as Error).message };
  }
};
