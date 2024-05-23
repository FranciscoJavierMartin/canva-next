'use client';
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
import { useState } from 'react';

const items = [
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
  const [state, setState] = useState('');
  const [show, setShow] = useState({
    status: true,
    name: '',
  });

  function setElements(type: string, name: string) {
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
          <div className='fixed left-[80px] z-30 h-full w-[350px]  bg-[#252627] px-8 py-5 transition-all duration-700'>
            <button
              onClick={() => setShow({ name: '', status: true })}
              className='absolute -right-2 top-[40%] flex h-[100px] w-[20px] cursor-pointer items-center justify-center rounded-full bg-[#252627] text-slate-300'
            >
              <MdKeyboardArrowLeft />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
