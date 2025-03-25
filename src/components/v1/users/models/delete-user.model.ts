import { prismaClient } from 'db';

export const deleteUserModel = async (id: number) => {
  try {
    const user = await prismaClient.user.delete({
      where: {
        id
      }
    });

    return user;
  } catch (err) {
    throw err;
  }
};
