'use server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';
import { JWT } from '@/lib/constants';

export async function uploadImage(formData: FormData) {
  const token = cookies().get(JWT)?.value;

  if (token) {
    const userInfo: any = jwt.verify(token, process.env.JWT_SECRET!);

    if (userInfo) {
      console.log(userInfo.id)
    } else {
      redirect(`/?show=true&form=login`);
    }
  } else {
    redirect(`/?show=true&form=login`);
  }
}
