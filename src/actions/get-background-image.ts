'use server';

import connectMongo from '@/lib/db/connect-mongo';
import backgroundImageModel from '@/lib/db/models/backgroundImageModel';

export async function getBackgroundImages(): Promise<string[]> {
  try {
    await connectMongo();
    const images = ((await backgroundImageModel.find({})) || []).map(
      (doc) => doc.imageUrl,
    );
    console.log(images);
    return [];
  } catch (error) {
    console.log(error);
  }

  return [];
}
