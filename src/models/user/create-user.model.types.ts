import { Users } from '@prisma/client';

export type CreateUserModelInput = Pick<Users, 'email' | 'name'>;
