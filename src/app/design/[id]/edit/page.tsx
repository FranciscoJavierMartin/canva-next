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
import clsx from 'clsx';
import Header from '@/components/Header';
import TemplateDesign from '@/components/sidebar/TemplateDesign';
import MyImages from '@/components/sidebar/MyImages';
import ImageGallery from '@/components/sidebar/ImageGallery';
import CreateComponent from '@/components/CreateComponent';

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
  const [currentComponent, setCurrentComponent] = useState<
    InfoComponent | undefined
  >({
    name: 'main_frame',
    type: 'rect',
    id: Math.floor(Math.random() * 1000 + 1),
    height: 500,
    width: 650,
    z_index: 1,
    color: '#fff',
    image: '',
    setCurrentComponent: () => {},
  });
  const [components, setComponents] = useState<InfoComponent[]>([
    {
      name: 'main_frame',
      type: 'rect',
      id: Math.floor(Math.random() * 1000 + 1),
      height: 500,
      width: 650,
      z_index: 1,
      color: '#fff',
      image: '',
      setCurrentComponent,
    },
  ]);
  const [color, setColor] = useState<string>('');

  function setElements(type: ElementType, name: string) {
    setState(type);
    setShow({
      status: false,
      name,
    });
  }

  function moveElement() {
    console.log('Move element');
  }

  function resizeElement() {
    console.log('Resize element');
  }

  function rotateElement() {
    console.log('Rotate element');
  }

  function removeElement() {
    console.log('Remove component');
  }

  return (
    <div className='h-screen w-screen bg-black'>
      <Header />
      <div className='flex h-[calc(100%-60px)] w-screen'>
        <div className='z-50 h-full w-[80px] overflow-y-auto bg-[#18191B] text-gray-400'>
          {items.map((item) => (
            <button
              key={item.title}
              className={clsx(
                'flex h-[80px] w-full cursor-pointer flex-col items-center justify-center gap-1 hover:text-gray-100',
                show.name === item.name && 'bg-[#252627]',
              )}
              onClick={() => setElements(item.type, item.name)}
            >
              <span className='text-2xl'>{item.icon}</span>
              <span className='text-xs font-medium'>{item.title}</span>
            </button>
          ))}
        </div>
        <div className='h-full w-[calc(100%-80px)]'>
          <div
            className={clsx(
              'fixed z-30 h-full w-[350px] bg-[#252627] transition-all duration-700',
              {
                '-left-[350px] p-0': show.status,
                'left-[80px] px-8 py-5': !show.status,
              },
            )}
          >
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
              <div className='no-scrollbar flex h-[88vh] items-start justify-start overflow-x-auto'>
                <div className='grid grid-cols-2 gap-2'>
                  {[1, 2, 3, 4, 5, 6].map((img, i) => (
                    <div
                      key={i}
                      className='h-[90px] w-full cursor-pointer overflow-hidden rounded-sm'
                    >
                      <img
                        className='size-full object-fill'
                        src='http://localhost:4200/proxy-image.jpg'
                        alt=''
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className='flex size-full'>
            <div
              className={clsx(
                'relative flex h-full items-center justify-center',
                {
                  'w-full': currentComponent,
                  'w-[calc(100%-250px)] overflow-hidden': !currentComponent,
                },
              )}
            >
              <div className='flex min-h-[500px] min-w-[650px] items-center justify-center overflow-hidden'>
                <div
                  id='main_design'
                  className='relative size-auto overflow-hidden'
                >
                  {components.map((c, i) => (
                    <CreateComponent
                      key={i}
                      info={c}
                      currentComponent={currentComponent}
                      removeComponent={removeElement}
                    />
                  ))}
                </div>
              </div>
            </div>
            {currentComponent && (
              <div className='h-full w-[250px] bg-[#252627] px-3 py-2 text-gray-300'>
                <div className='flex h-full flex-col items-start justify-start gap-6 px-3'>
                  <div className='mt-4 flex items-start justify-start gap-4'>
                    <span>Color:</span>
                    <label
                      htmlFor='color'
                      className='size-[30px] cursor-pointer rounded-sm'
                      style={{
                        backgroundColor:
                          currentComponent.color &&
                          currentComponent.color !== '#fff'
                            ? currentComponent.color
                            : 'gray',
                      }}
                    ></label>
                    <input
                      id='color'
                      type='color'
                      className='invisible'
                      onChange={(e) => setColor(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
