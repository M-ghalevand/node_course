import { z } from 'zod';

export const updateProductValidator = z.object({
  title: z
    .string()
    .min(1, { message: 'Title cannot be empty when updating a product' })
    .max(100, { message: 'Title must be less than 100 characters' }),
  price: z
    .number()
    .int({ message: 'Price must be an integer' })
    .nonnegative({ message: 'Price must be a positive number or zero when updating a product' }),
  user_id: z.number().int({ message: 'User ID must be an integer' }).positive({ message: 'User ID must be a positive number' })
});
