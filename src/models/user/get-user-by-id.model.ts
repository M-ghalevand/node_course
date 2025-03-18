import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getUserByIdModel = async (id: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    });

    return user;
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
};
