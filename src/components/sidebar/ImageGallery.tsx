type ImageGalleryProps = {
  addImage: (image: string) => void;
};

export default function ImageGallery({ addImage }: ImageGalleryProps) {
  return (
    <div className='grid grid-cols-2 gap-2'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
        (img, i) => (
          <div
            key={i}
            className='h-[90px] w-full cursor-pointer overflow-hidden rounded-md'
            onClick={() => addImage('http://localhost:4200/proxy-image.jpg')}
          >
            <img
              className='size-full'
              src='http://localhost:4200/proxy-image.jpg'
              alt=''
            />
          </div>
        ),
      )}
    </div>
  );
}
