'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import bcrypt from 'bcrypt';
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


    }
    redirect('/home');
  } else {
  }

  return {
    message,
    error: validatedFields.error?.flatten().fieldErrors,
  };
}
