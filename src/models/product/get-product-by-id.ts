import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProductById = async (id: number) => {
  try {
    return await prisma.products.findUnique({
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
