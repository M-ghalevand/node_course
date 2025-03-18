import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUsersModel = async () => {
  try {
    return await prisma.user.findMany();
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
};
