'use server';

import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';
import { JWT } from '@/lib/constants';
import designModel from '@/lib/db/models/designModel';

export async function createDesign(formData: FormData) {
  const token = cookies().get(JWT)?.value;

  if (token) {
    const userInfo: any = jwt.verify(token, process.env.JWT_SECRET!);

    if (userInfo) {
      const designField = formData.get('design')!;
      const image = formData.get('image');

      try {
        // TODO: Upload to cloudinary

        const design = await designModel.create({
          user_id: userInfo.id,
          components: [JSON.parse(designField.toString())],
          // TODO: Add url from cloudinary
          imageUrl: '',
        });
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
