import { User } from '@prisma/client';
import { CustomError } from 'utils';

import { createUserModel } from '../models';

export const createUserService = async (body: Pick<User, 'email' | 'name'>) => {
  try {
    const { name, email } = body;

    return await createUserModel({ name, email });
  } catch (err) {
    throw new CustomError(String(err), 400);
  }
};
