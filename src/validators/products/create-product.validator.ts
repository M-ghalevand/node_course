import { z } from 'zod';

export const createProductValidator = z.object({
  title: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long' })
    .max(100, { message: 'Title must not exceed 100 characters' })
    .nonempty({ message: 'Title is required' }),
  price: z
    .number()
    .positive({ message: 'Price must be a positive number' })
    .nonnegative({ message: 'Price cannot be negative' })
    .min(0.01, { message: 'Price must be at least 0.01' }),
  user_id: z.string().uuid({ message: 'Invalid user_id format, must be a valid UUID' })
});
