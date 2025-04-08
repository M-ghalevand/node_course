import { User } from '@prisma/client';
import { prismaClient } from 'db';

export const createUserModel = async ({ name, email }: Pick<User, 'email' | 'name'>) => {
  try {
    const user = await prismaClient.user.create({
      data: {
        name,
        email
      }
    });

    return user;
  } catch (err) {
    throw err;
  }
};