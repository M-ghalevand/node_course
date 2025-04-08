import { User } from '@prisma/client';
import { Request } from 'express';

export type CreateUserRequest = Request<{}, {}, Pick<User, 'email' | 'name'>>;
