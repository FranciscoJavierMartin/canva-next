import { ChangeEvent, useEffect, useState } from 'react';
import ImageGallery from '@/components/sidebar/ImageGallery';
import { uploadImage as uploadImageServer } from '@/actions/upload-image';
import { getUserImages } from '@/actions/get-user-images';

type MyImagesProps = {
  addImage: (img: string) => void;
};

export default function MyImages({ addImage }: MyImagesProps) {
  const [images, setImages] = useState<string[]>([]);

  async function uploadImage(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files?.length) {
      const formData = new FormData();
      formData.append('image', event.target.files[0]);

      try {
        await uploadImageServer(formData);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    (async () => {
      const imagesUrl: string[] = await getUserImages();
      setImages(imagesUrl);
    })();
  }, []);

  return (
    <div>
      <div className='mb-3 flex h-[40px] w-full items-center justify-center rounded-md bg-purple-500 text-white'>
        <label htmlFor='image' className='cursor-pointer text-center'>
          Upload image
        </label>
        <input
          type='file'
          id='image'
          className='hidden'
          onChange={uploadImage}
        />
      </div>
      <div className='no-scrollbar flex h-[80vh] items-start justify-start overflow-x-auto'>
        <ImageGallery addImage={addImage} images={images} />
      </div>
    </div>
  );
}
