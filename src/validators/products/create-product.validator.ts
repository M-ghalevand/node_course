import { z } from 'zod';

export const createProductValidator = z.object({
  title: z.string().min(1, { message: 'Title cannot be empty for new products' }).max(100, { message: 'Title must be less than 100 characters' }),
  price: z.number().int({ message: 'Price must be an integer' }).nonnegative({ message: 'Price must be a positive number or zero for new products' }),
  user_id: z.number().int({ message: 'User ID must be an integer' }).positive({ message: 'User ID must correspond to a valid user' })
});



