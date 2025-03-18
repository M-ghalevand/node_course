import { Products } from '@prisma/client';

export type CreateProductModelInput = Pick<Products, 'title' | 'price' | 'user_id'>;
