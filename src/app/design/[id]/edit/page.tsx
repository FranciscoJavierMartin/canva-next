'use client';
import { useState } from 'react';
import { BsImages } from 'react-icons/bs';
import {
  FaCloudUploadAlt,
  FaFolderOpen,
  FaShapes,
  FaTextHeight,
} from 'react-icons/fa';
import { LuLayoutTemplate } from 'react-icons/lu';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { RxTransparencyGrid } from 'react-icons/rx';
import Header from '@/components/Header';
import TemplateDesign from '@/components/sidebar/TemplateDesign';
import MyImages from '@/components/sidebar/MyImages';
import ImageGallery from '@/components/sidebar/ImageGallery';

type ElementType =
  | 'design'
  | 'shape'
  | 'image'
  | 'text'
  | 'project'
  | 'initImage'
  | 'background';

const items: {
  title: string;
  icon: JSX.Element;
  type: ElementType;
  name: string;
}[] = [
  {
    title: 'Design',
    icon: <LuLayoutTemplate />,
    type: 'design',
    name: 'design',
  },
  {
    title: 'Shapes',
    icon: <FaShapes />,
    type: 'shape',
    name: 'shape',
  },
  {
    title: 'Upload',
    icon: <FaCloudUploadAlt />,
    type: 'image',
    name: 'uploadImage',
  },
  {
    title: 'Text',
    icon: <FaTextHeight />,
    type: 'text',
    name: 'text',
  },
  {
    title: 'Project',
    icon: <FaFolderOpen />,
    type: 'project',
    name: 'projects',
  },
  {
    title: 'Images',
    icon: <BsImages />,
    type: 'initImage',
    name: 'images',
  },
  {
    title: 'Background',
    icon: <RxTransparencyGrid />,
    type: 'background',
    name: 'background',
  },
];

export default function EditDesignPage() {
  const [state, setState] = useState<ElementType | undefined>(undefined);
  const [show, setShow] = useState({
    status: true,
    name: '',
  });

  function setElements(type: ElementType, name: string) {
    setState(type);
    setShow({
      status: false,
      name,
    });
  }

  return (
    <div className='h-screen w-screen bg-black'>
      <Header />
      <div className='flex h-[calc(100%-60px)] w-screen'>
        <div className='z-50 h-full w-[80px] overflow-y-auto bg-[#18191B] text-gray-400'>
          {items.map((item) => (
            <button
              key={item.title}
              className='flex h-[80px] w-full cursor-pointer flex-col items-center justify-center gap-1 hover:text-gray-100'
              onClick={() => setElements(item.type, item.name)}
            >
              <span className='text-2xl'>{item.icon}</span>
              <span className='text-xs font-medium'>{item.title}</span>
            </button>
          ))}
        </div>
        <div className='h-full w-[calc(100%-80px)]'>
          {/* TODO: Add styles to close */}
          <div className='fixed left-[80px] z-30 h-full w-[350px] bg-[#252627] px-8 py-5 transition-all duration-700'>
            <button
              onClick={() => setShow({ name: '', status: true })}
              className='absolute -right-2 top-[40%] flex h-[100px] w-[20px] cursor-pointer items-center justify-center rounded-full bg-[#252627] text-slate-300'
            >
              <MdKeyboardArrowLeft />
            </button>
            {state === 'design' && (
              <div className='grid grid-cols-2 gap-2'>
                <TemplateDesign />
              </div>
            )}
            {state === 'shape' && (
              <div className='grid grid-cols-3 gap-2'>
                <div className='h-[90px] cursor-pointer bg-[#3c3c3d]'></div>
                <div className='h-[90px] cursor-pointer rounded-full bg-[#3c3c3d]'></div>
                <div
                  className='h-[90px] cursor-pointer bg-[#3c3c3d]'
                  style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%' }}
                ></div>
              </div>
            )}
            {state === 'image' && <MyImages />}
            {state === 'text' && (
              <div className='grid grid-cols-1 gap-2'>
                <div className='cursor-pointer rounded-sm bg-[#3c3c3d] p-3 text-xl font-bold text-white'>
                  <h2>Add a text</h2>
                </div>
              </div>
            )}
            {state === 'project' && (
              <div className='grid grid-cols-2 gap-2'></div>
            )}
            {state === 'initImage' && (
              <div className='no-scrollbar flex h-[88vh] items-start justify-start overflow-x-auto'>
                <ImageGallery />
              </div>
            )}
            {state === 'background' && (
              <div className='grid grid-cols-2 gap-2'></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
