import { z } from 'zod';

export const userSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1, { message: 'Name is required' }).max(100, { message: 'Name must be less than 100 characters' }),
  email: z.string().email({ message: 'Invalid email format' }).max(100, { message: 'Email must be less than 100 characters' })
});
