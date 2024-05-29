'use server';

import { loginUserSchema } from '@/lib/validations/loginUserSchema';

export async function loginUser(
  prev: LoginFormState<LoginFormFields>,
  formData: FormData,
) {
  let message: string = '';
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
    }
  } catch (error) {
    console.log(error);
    message = 'Ups, something went wrong. Please try again.';
  }

  return {
    message,
    error: validatedFields.error?.flatten().fieldErrors || {},
  };
}
