import { Request } from 'express';

interface CreateProductRequestBody {
  title: string;
  price: number;
  user_id: number;
}

export type CreateProductRequest = Request<{}, {}, CreateProductRequestBody>;
