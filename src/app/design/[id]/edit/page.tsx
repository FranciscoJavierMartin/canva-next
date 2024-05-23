import Header from '@/components/Header';
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

const items = [
  {
    name: 'Design',
    icon: <LuLayoutTemplate />,
  },
  {
    name: 'Shapes',
    icon: <FaShapes />,
  },
  {
    name: 'Upload',
    icon: <FaCloudUploadAlt />,
  },
  {
    name: 'Text',
    icon: <FaTextHeight />,
  },
  {
    name: 'Project',
    icon: <FaFolderOpen />,
  },
  {
    name: 'Images',
    icon: <BsImages />,
  },
  {
    name: 'Background',
    icon: <RxTransparencyGrid />,
  },
];

export default function EditDesignPage() {
  return (
    <div className='h-screen w-screen bg-black'>
      <Header />
      <div className='flex h-[calc(100%-60px)] w-screen'>
        <div className='z-50 h-full w-[80px] overflow-y-auto bg-[#18191B] text-gray-400'>
          {items.map((item) => (
            <div
              key={item.name}
              className='flex h-[80px] w-full cursor-pointer flex-col items-center justify-center gap-1 hover:text-gray-100'
            >
              <span className='text-2xl'>{item.icon}</span>
              <span className='text-xs font-medium'>{item.name}</span>
            </div>
          ))}
        </div>
        <div className='h-full w-[calc(100%-80px)]'>
          <div className='fixed left-[80px] z-30 h-full w-[350px]  bg-[#252627] px-8 py-5 transition-all duration-700'>
            <div className='absolute -right-2 top-[40%] flex h-[100px] w-[20px] cursor-pointer items-center justify-center rounded-full bg-[#252627] text-slate-300'>
              <MdKeyboardArrowLeft />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
