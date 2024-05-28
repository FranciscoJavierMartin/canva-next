import { z } from 'zod';

export const registerUserSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(2, 'Name is too short'),
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email('Invalid email'),
  password: z
    .string({ required_error: 'Password is required' })
    .trim()
    .min(6, 'Password is too short'),
});
