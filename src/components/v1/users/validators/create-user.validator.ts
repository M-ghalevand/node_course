import { z } from 'zod';

export const createUserValidator = z.object({
  name: z.string().min(1, { message: 'Name is required and cannot be empty' }).max(100, { message: 'Name cannot exceed 100 characters' }),
  email: z.string().email({ message: 'Please provide a valid email address' }).max(100, { message: 'Email cannot exceed 100 characters' })
});
