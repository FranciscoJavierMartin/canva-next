'use server';

export async function registerUser(formData: FormData) {
  const data = {
    email: formData.get('email'),
    name: formData.get('name'),
    password: formData.get('password'),
  };

  console.log(data);
}
