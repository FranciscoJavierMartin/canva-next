import Link from 'next/link';
import * as htmlToImage from 'html-to-image';
import { saveDesign } from '@/actions/save-design';

type HeaderProps = {
  components: any[];
  designId: string;
};

export default function Header({ components, designId }: HeaderProps) {
  async function downloadImage(): Promise<void> {
    const mainDesign = document.getElementById('main_design');

    const dataUrl = await htmlToImage.toPng(mainDesign!, {
      style: {
        transform: 'scale(1)',
      },
    });

    const link = document.createElement('a');
    link.download = 'image';
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  async function saveImage(): Promise<void> {
    const mainDesign = document.getElementById('main_design');
    const image = await htmlToImage.toBlob(mainDesign!);

    if (image) {
      const obj = { design: components };
      const formData = new FormData();
      formData.append('designId', designId);
      formData.append('design', JSON.stringify(obj));
      formData.append('image', image);

      try {
        await saveDesign(formData);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className='h-[60px] w-full bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c]'>
      <div className='flex h-full items-center justify-between px-10 text-gray-400'>
        <Link href='/'>
          <img
            src='https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg'
            alt='Logo'
            role='presentation'
            width={80}
            height={30}
            className='size-full'
          />
        </Link>
        <span className='text-xl'>Easy Canva</span>
        <div className='flex items-center justify-center gap-2 text-gray-200'>
          <button
            onClick={saveImage}
            className='rounded-md bg-[#7482f6] px-3 py-2 outline-none'
          >
            Save
          </button>
          <button
            onClick={downloadImage}
            className='rounded-md bg-[#a855f7] px-3 py-2 outline-none'
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
