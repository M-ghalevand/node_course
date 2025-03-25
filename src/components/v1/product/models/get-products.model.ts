import { prismaClient } from 'db';

export const getProductsModel = async () => {
  try {
    return await prismaClient.products.findMany();
  } catch (err) {
    throw err;
  }
};
