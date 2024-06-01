import { useEffect, useState } from 'react';
import { getBackgroundImages } from '@/actions/get-background-image';
import ImageGallery from './sidebar/ImageGallery';

export default function BackgroundImages() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const imagesUrls = await getBackgroundImages();
        setImages(imagesUrls);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ImageGallery
      type='background'
      images={images}
      setImages={setImages}
      addImage={() => {}}
    />
  );
}
