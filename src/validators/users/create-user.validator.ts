import { userSchema } from 'schemas';

export const createUserValidator = userSchema
  .pick({
    name: true,
    email: true
  })
  .extend({
    name: userSchema.shape.name
      .min(1, { message: 'Name is required and cannot be empty' })
      .max(100, { message: 'Name cannot exceed 100 characters' }),
    email: userSchema.shape.email
      .email({ message: 'Please provide a valid email address' })
      .max(100, { message: 'Email cannot exceed 100 characters' })
  });
