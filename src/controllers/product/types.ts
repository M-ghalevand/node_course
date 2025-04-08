import { Request } from 'express';

interface CreateProductRequestBody {
  title: string;
  price: number;
  user_id: number;
}

export type CreateProductRequest = Request<{}, {}, CreateProductRequestBody>;

interface UpdateProductRequestBody {
  title: string;
  price: number;
}

export type UpdateProductRequest = Request<{ id: string }, {}, UpdateProductRequestBody>;
