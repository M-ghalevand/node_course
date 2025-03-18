import { Products } from '@prisma/client';

export type UpdateProductInput = Pick<Products, 'title' | 'price' | 'id'>;
