'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { registerUserSchema } from '@/lib/validations/registerUserSchema';
import userModel from '@/lib/db/models/userModel';

export async function registerUser(
  prev: RegisterFormState<RegisterFormFields>,
  formData: FormData,
) {
  let message: string = '';
  const data = {
    email: formData.get('email'),
    name: formData.get('name'),
    password: formData.get('password'),
  };

  const validatedFields = registerUserSchema
    .transform((data) => ({
      name: data.name.trim(),
      email: data.email.trim(),
      password: data.password.trim(),
    }))
    .safeParse(data);

  if (validatedFields.success) {
    const { email, name, password } = data;
    const userExists = await userModel.findOne({ email }).select('+password');

    if (userExists) {
      message = 'User already exists';
    } else {
      const user = await userModel.create({
        name,
        email,
        password: await bcrypt.hash(
          password!.toString(),
          process.env.SALT_PASSWORD!,
        ),
      });

      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
          id: user.id,
        },
        process.env.JWT_SECRET!,
        { expiresIn: '2d' },
      );
      cookies().set('jwt', token);
      redirect('/home');
    }
  }

  return {
    message,
    error: validatedFields.error?.flatten().fieldErrors,
  };
}
