import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProductsModel = async () => {
  try {
    return await prisma.products.findMany();
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
};
