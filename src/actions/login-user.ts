'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import bcrypt from 'bcrypt';
import connectMongo from '@/lib/db/connect-mongo';
import userModel from '@/lib/db/models/userModel';
import { loginUserSchema } from '@/lib/validations/loginUserSchema';
import { signJwt } from '@/lib/db/jwt';

export async function loginUser(
  prev: LoginFormState<LoginFormFields>,
  formData: FormData,
) {
  let message: string = '';
  let error: { [key in keyof LoginFormFields]?: string[] | undefined } = {};
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const validatedFields = loginUserSchema
    .transform((data) => ({
      email: data.email.trim(),
      password: data.password.trim(),
    }))
    .safeParse(data);

  try {
    if (validatedFields.success) {
      await connectMongo();
      const { email, password } = data;
      const user = await userModel.findOne({ email }).select('+password');

      if (user) {
        const matchPassword = await bcrypt.compare(
          password!.toString(),
          user.password,
        );

        if (matchPassword) {
          const token = signJwt(user.id, user.name, user.email);
          cookies().set('jwt', token);
          return redirect('/home');
        }
      } else {
        message = 'Email or password does not match';
      }
    } else {
      error = validatedFields.error?.flatten().fieldErrors;
    }
  } catch (error) {
    console.log(error);
    message = 'Ups, something went wrong. Please try again.';
    throw error;
  }

  return {
    message,
    error,
  };
}
