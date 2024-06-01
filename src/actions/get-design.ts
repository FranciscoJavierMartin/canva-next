'use server';

import connectMongo from '@/lib/db/connect-mongo';
import designModel from '@/lib/db/models/designModel';

export async function getDesign(id: string) {
  try {
    await connectMongo();
    const design = await designModel.findById(id);
    return { design: design.components };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
