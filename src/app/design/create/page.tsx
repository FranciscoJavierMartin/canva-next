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
    id: Math.floor(Math.random() * 1000 + 1),
    height,
    width,
    z_index: 1,
    color: 'green',
    image: 'http://localhost:4200/proxy-image.jpg',
  };

  return (
    <div className='relative flex h-screen w-screen items-center justify-center'>
      <div ref={ref} className='relative size-auto overflow-auto'>
        <CreateComponent info={obj} currentComponent={{}} />
      </div>
    </div>
  );
}
