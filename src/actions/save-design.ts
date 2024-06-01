'use server';

import connectMongo from '@/lib/db/connect-mongo';
import designModel from '@/lib/db/models/designModel';

export async function saveDesign(formData: FormData) {
  const data = {
    designId: formData.get('designId'),
    components:
      JSON.parse(formData.get('design')?.toString() || '{}').design ?? [],
    image: formData.get('image'),
  };

  try {
    // TODO: Update image on cloudinary

    await connectMongo();
    await designModel.findByIdAndUpdate(data.designId, {
      imageUrl: '',
      components: data.components,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
