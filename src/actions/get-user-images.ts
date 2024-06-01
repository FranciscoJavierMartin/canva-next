'use server';

import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';
import { JWT } from '@/lib/constants';
import userImageModel from '@/lib/db/models/userImageModel';
import connectMongo from '@/lib/db/connect-mongo';

export async function getUserImages(): Promise<string[]> {
  const token = cookies().get(JWT)?.value;

  if (token) {
    const userInfo: any = jwt.verify(token, process.env.JWT_SECRET!);

    if (userInfo) {
      // TODO: Upload to cloudinary
      await connectMongo();
      const userImages = (
        await userImageModel
          .find({
            user_id: userInfo.id,
          })
          .select('imageUrl')
      ).map((doc) => doc.imageUrl);

      return userImages;
    } else {
      redirect(`/?show=true&form=login`);
    }
  } else {
    redirect(`/?show=true&form=login`);
  }
}
