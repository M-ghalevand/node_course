import { PrismaClient } from '@prisma/client';

import { CreateProductModelInput } from './types';
const prisma = new PrismaClient();

export const createProductModel = async ({ title, price, user_id }: CreateProductModelInput) => {
  try {
    const product = await prisma.products.create({
      data: {
        title,
        price,
        user_id
      }
    });

    return product;
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
};
