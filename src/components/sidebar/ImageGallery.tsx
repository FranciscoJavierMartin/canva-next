type ImageGalleryProps = {
  addImage: (image: string) => void;
  images: string[];
};

export default function ImageGallery({ addImage, images }: ImageGalleryProps) {
  return (
    <div className='grid grid-cols-2 gap-2'>
      {images.map(
        (img, i) => (
          <div
            key={i}
            className='h-[90px] w-full cursor-pointer overflow-hidden rounded-md'
            onClick={() =>
              addImage('http://localhost:4200/images/proxy-image.jpg')
            }
          >
            <img
              className='size-full'
              src='http://localhost:4200/images/proxy-image.jpg'
              alt=''
            />
          </div>
        ),
      )}
    </div>
  );
}
