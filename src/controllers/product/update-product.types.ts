import { Request } from 'express';

interface UpdateProductRequestBody {
  title: string;
  price: number;
}

export type UpdateProductRequest = Request<{}, {}, UpdateProductRequestBody>;
