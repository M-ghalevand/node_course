import { User } from '@prisma/client';

import { createUserModel } from '../models';

export const createUserService = async (body: Pick<User, 'email' | 'name'>) => {
  try {
    const { name, email } = body;

    return await createUserModel({ name, email });
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'An unknown error occurred' };
  }
};
