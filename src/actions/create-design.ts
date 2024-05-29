'use server';

import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';
import { JWT } from '@/lib/constants';

export async function createDesign(formData: FormData) {
  const token = cookies().get(JWT)?.value;

  if (token) {
    const userInfo = jwt.verify(token, process.env.JWT_SECRET!);

    if (userInfo) {
      console.log(formData.get('design'));
      console.log(formData.get('image'));

      try {
        // TODO: Upload to cloudinary
      } catch (error) {
        console.log(error);
      }
    } else {
      redirect(`/?show=true&form=login`);
    }
  } else {
    redirect(`/?show=true&form=login`);
  }
}
