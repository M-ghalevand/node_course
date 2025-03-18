import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteUserModel = async (id: number) => {
  try {
    const user = await prisma.user.delete({
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
