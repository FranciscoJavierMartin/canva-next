'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import bcrypt from 'bcrypt';
import { registerUserSchema } from '@/lib/validations/registerUserSchema';
import userModel from '@/lib/db/models/userModel';
import connectMongo from '@/lib/db/connect-mongo';
import { signJwt } from '@/lib/db/jwt';

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

  try {
    if (validatedFields.success) {
      await connectMongo();
      const { email, name, password } = data;
      const userExists = await userModel.findOne({ email });

      if (userExists) {
        message = 'User already exists';
      } else {
        const user = await userModel.create({
          name,
          email,
          password: await bcrypt.hash(
            password!.toString(),
            +process.env.SALT_PASSWORD!,
          ),
        });

        const token = signJwt(user.id, user.name, user.email);
        cookies().set('jwt', token);
        redirect('/home');
      }
    }
  } catch (error) {
    console.log(error);
    message = 'Ups, something went wrong. Please try again.';
    throw error;
  }

  return {
    message,
    error: validatedFields.error?.flatten().fieldErrors || {},
  };
}
