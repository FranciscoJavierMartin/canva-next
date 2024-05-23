import ImageGallery from '@/components/sidebar/ImageGallery';

export default function MyImages() {
  return (
    <div>
      <div className='mb-3 flex h-[40px] w-full items-center justify-center rounded-md bg-purple-500 text-white'>
        <label htmlFor='image' className='cursor-pointer text-center'>
          Upload image
        </label>
        <input type='file' id='image' className='hidden' />
      </div>
      <div className='no-scrollbar flex h-[80vh] items-start justify-start overflow-x-auto'>
        <ImageGallery />
      </div>
    </div>
  );
}
