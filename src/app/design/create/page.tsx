'use client';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import * as htmlToImage from 'html-to-image';
import CreateComponent from '@/components/CreateComponent';
import { createDesign as saveDesign } from '@/actions/create-design';

export default function CreateDesignPage({ searchParams }: SearchParamsProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const height = searchParams?.height || '200';
  const width = searchParams?.width || '400';
  const router = useRouter();

  const obj = {
    name: 'main_frame',
    type: 'rect',
    id: Math.floor(Math.random() * 1000 + 1),
    height,
    width,
    z_index: 1,
    color: '#fff',
    image: 'http://localhost:4200/images/proxy-image.jpg',
  };

  async function createDesign() {
    const image = await htmlToImage.toBlob(ref.current!);
    const design = JSON.stringify(obj);

    if (image) {
      const formData = new FormData();
      formData.append('design', design);
      formData.append('image', image);

      try {
        const data = await saveDesign(formData);
        router.replace(`/design/${data._id}/edit`);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    if (ref.current) {
      createDesign();
    } else {
      router.push('/');
    }
  }, []);

  return (
    <div className='relative flex h-screen w-screen items-center justify-center'>
      <div ref={ref} className='relative size-auto overflow-auto'>
        <CreateComponent info={obj} currentComponent={{}} />
      </div>
    </div>
  );
}
