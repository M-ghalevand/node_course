import { prismaClient } from 'db';

export const getUserByIdModel = async (id: number) => {
  try {
    const user = await prismaClient.user.findUnique({
      where: {
        id
      }
    });

    return user;
  } catch (err) {
    throw err;
  }
};