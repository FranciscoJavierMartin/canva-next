'use server';

import { registerUserSchema } from '@/lib/validations/registerUserSchema';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function registerUser(
  prev: RegisterFormState<RegisterFormFields>,
  formData: FormData,
) {
  const data = {
    email: formData.get('email'),
    name: formData.get('name'),
    password: formData.get('password'),
  };

  const validatedFields = registerUserSchema.safeParse(data);

  if (validatedFields.success) {
    redirect('/home');
  } else {
  }

  return {
    message: '',
    error: validatedFields.error?.flatten().fieldErrors,
  };
}
