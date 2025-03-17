import { productSchema } from 'schemas';

export const createProductValidator = productSchema
  .pick({
    title: true,
    price: true,
    user_id: true
  })
  .extend({
    title: productSchema.shape.title.min(1, { message: 'Title cannot be empty for new products' }),
    price: productSchema.shape.price.nonnegative({ message: 'Price must be a positive number or zero for new products' }),
    user_id: productSchema.shape.user_id.positive({ message: 'User ID must correspond to a valid user' })
  });
