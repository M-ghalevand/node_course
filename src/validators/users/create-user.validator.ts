import { z } from 'zod';

export const createUserValidator = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name must not exceed 50 characters' })
    .nonempty({ message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address format' }).nonempty({ message: 'Email is required' })
});
