import { PrismaClient } from '@prisma/client';

import { UpdateProductInput } from './update-product.types';

const prisma = new PrismaClient();

export const updateProduct = async ({ id, title, price }: UpdateProductInput) => {
  try {
    const updatedProduct = await prisma.products.update({
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
  } finally {
    await prisma.$disconnect();
  }
};
