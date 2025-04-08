import { prismaClient } from 'db';

export const getProductByIdModel = async (id: number) => {
  try {
    return await prismaClient.products.findUnique({
      where: {
        id
      }
    });
  } catch (err) {
    throw err;
  }
};