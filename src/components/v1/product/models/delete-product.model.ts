import { prismaClient } from 'db';

export const deleteProductModel = async (id: number) => {
  try {
    return await prismaClient.products.delete({
      where: {
        id
      }
    });
  } catch (err) {
    throw err;
  }
};
