import { Request } from 'express';

interface CreateUserRequestBody {
  name: string;
  email: string;
}

export type CreateUserRequest = Request<{}, {}, CreateUserRequestBody>;
