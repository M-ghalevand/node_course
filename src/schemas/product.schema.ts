import { z } from 'zod';

export const productSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1, { message: 'Title is required' }).max(100, { message: 'Title must be less than 100 characters' }),
  price: z.number().int({ message: 'Price must be an integer' }).nonnegative({ message: 'Price must be zero or greater' }),
  user_id: z.number().int({ message: 'User ID must be an integer' }).positive({ message: 'User ID must be a positive number' })
});
