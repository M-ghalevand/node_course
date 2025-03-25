import { prismaClient } from 'db';

export const getUsersModel = async () => {
  try {
    return await prismaClient.user.findMany();
  } catch (err) {
    throw err;
  }
};
