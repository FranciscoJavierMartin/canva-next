'use client';
import { useRef } from 'react';
import CreateComponent from '@/components/CreateComponent';

export default function CreateDesignPage({ searchParams }: SearchParamsProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const height = searchParams?.height || '200';
  const width = searchParams?.width || '400';

  const obj = {
    name: 'main_frame',
    type: 'rect',
    id: Math.floor(Math.random() * 100 + 1),
    height,
    width,
    z_index: 1,
    color: 'green',
    image:
      'https://www.startpage.com/av/proxy-image?piurl=http%3A%2F%2Fwww.wallpapers13.com%2Fwp-content%2Fuploads%2F2015%2F12%2FNature-Lake-Bled.-Desktop-background-image.jpg&sp=1716398712T6c0cfe91bc16bd680cc376ca747add95d22695488724690775950447b886e1c7',
  };

  return (
    <div className='relative flex h-screen w-screen items-center justify-center'>
      <div ref={ref} className='relative size-auto overflow-auto'>
        <CreateComponent info={obj} currentComponent={{}} />
      </div>
    </div>
  );
}
