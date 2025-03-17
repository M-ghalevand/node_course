import { productSchema } from 'schemas';

export const updateProductValidator = productSchema
  .pick({
    title: true,
    price: true
  })
  .extend({
    title: productSchema.shape.title.min(1, {
      message: 'Title cannot be empty when updating a product'
    }),
    price: productSchema.shape.price.nonnegative({
      message: 'Price must be a positive number or zero when updating a product'
    })
  });
