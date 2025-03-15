import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' })
  })
});

export const getUserSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, { message: 'ID must be a number' }) // ID باید عدد باشد
  })
});
