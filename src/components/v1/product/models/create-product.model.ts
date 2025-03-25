import { Products } from '@prisma/client';
import { prismaClient } from 'db';

export const createProductModel = async ({ title, price, user_id }: Pick<Products, 'title' | 'price' | 'user_id'>) => {
  try {
    const product = await prismaClient.products.create({
      data: {
        title,
        price,
        user_id
      }
    });

    return product;
  } catch (err) {
    throw err;
  }
};
