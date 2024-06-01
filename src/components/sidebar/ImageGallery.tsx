import { Dispatch, SetStateAction } from 'react';

type ImageGalleryProps = {
  addImage: (image: string) => void;
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
  type: string;
};

export default function ImageGallery({
  addImage,
  images,
  setImages,
  type,
}: ImageGalleryProps) {
  return (
    <div className='grid grid-cols-2 gap-2'>
      {images.map((img, i) => (
        <div
          key={i}
          className='h-[90px] w-full cursor-pointer overflow-hidden rounded-md'
          onClick={() => {
            if (type === 'background') {
              setImages((prev) => [...prev, img]);
            } else {
              addImage(img);
            }
          }}
        >
          <img className='size-full' src={img} alt='' />
        </div>
      ))}
    </div>
  );
}
