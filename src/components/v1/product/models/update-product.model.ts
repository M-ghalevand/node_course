import { Products } from '@prisma/client';
import { prismaClient } from 'db';

export const updateProductModel = async ({ id, title, price }: Pick<Products, 'title' | 'price'> & { id: number }) => {
  try {
    const updatedProduct = await prismaClient.products.update({
      where: {
        id
      },
      data: {
        title,
        price
      }
    });

    return updatedProduct;
  } catch (err) {
    throw err;
  }
};
