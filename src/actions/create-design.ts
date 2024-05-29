'use server';

import { JWT } from '@/lib/constants';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';

export async function createDesign(formData: FormData) {
  const token = cookies().get(JWT)?.value;

  if (token) {
    const userInfo = jwt.verify(token, process.env.JWT_SECRET!);
    console.log(userInfo);
    // if (!userInfo) {
    //   userInfo.
    // }
  }else {
    console.log('Logout')
  }
}
