import { Products } from '@prisma/client';

export type UpdateProductInput = Pick<Products, 'title' | 'price' | 'id'>;

export type CreateProductModelInput = Pick<Products, 'title' | 'price' | 'user_id'>;
