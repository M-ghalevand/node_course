import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteProductModel = async (id: number) => {
  try {
    return await prisma.products.delete({
      where: {
        id
      }
    });
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
};
