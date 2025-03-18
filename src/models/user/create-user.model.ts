import { PrismaClient } from '@prisma/client';

import { CreateUserModelInput } from './create-user.model.types';
const prisma = new PrismaClient();

export const createUserModel = async ({ name, email }: CreateUserModelInput) => {
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    });

    return user;
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
};
