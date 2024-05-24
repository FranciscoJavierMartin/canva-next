'use client';
import { useEffect, useState } from 'react';
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
  //TODO: Should be an empty object
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
    opacity: 100,
    left: 0,
    rotate: 0,
    top: 0,
    setCurrentComponent: () => {},
    resizeElement: (id: string, info: InfoComponent) => {},
    moveElement: (id: string, info: InfoComponent) => {},
    rotateElement: (id: string, info: InfoComponent) => {},
  });
  const [components, setComponents] = useState<InfoComponent[]>([
    currentComponent!,
    // {
    //   name: 'main_frame',
    //   type: 'rect',
    //   id: Math.floor(Math.random() * 1000 + 1),
    //   height: 500,
    //   width: 650,
    //   z_index: 1,
    //   color: '#fff',
    //   image: '',
    //   setCurrentComponent,
    // },
  ]);
  const [color, setColor] = useState<string>('#fff');
  const [image, setImage] = useState<string>('');
  const [rotate, setRotate] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [top, setTop] = useState<number>(0);

  function setElements(type: ElementType, name: string): void {
    setState(type);
    setShow({
      status: false,
      name,
    });
  }

  function moveElement(id: string, currentInfo: InfoComponent): void {
    setCurrentComponent(currentInfo);
    let isMoving: boolean = true;

    const currentDiv = document.getElementById(id);

    function mouseMove({ movementX, movementY }: MouseEvent): void {
      if (currentDiv) {
        const getStyle = window.getComputedStyle(currentDiv);
        const left = parseInt(getStyle.left);
        const top = parseInt(getStyle.top);

        if (isMoving) {
          currentDiv.style.left = `${left + movementX}px`;
          currentDiv.style.top = `${top + movementY}px`;
        }
      }
    }

    function mouseUp(): void {
      isMoving = false;
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseup', mouseUp);
      setLeft(parseInt(currentDiv?.style.left || '0'));
      setTop(parseInt(currentDiv?.style.top || '0'));
    }

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', mouseUp);
  }

  function resizeElement(): void {
    console.log('Resize element');
  }

  function rotateElement(): void {
    console.log('Rotate element');
  }

  function removeElement(id: number): void {
    const temp = components.filter((c) => c.id !== id);
    setCurrentComponent(undefined);
    setComponents(temp);
  }

  function removeBackground(): void {
    const component = components.find((c) => c.id === currentComponent?.id)!;
    const temp = components.filter((c) => c.id !== currentComponent?.id)!;
    component.image = '';
    setImage('');
    setComponents([...temp, component]);
  }

  function createShape(name: string, type: Shape): void {
    //TODO: Add to InfoComponent
    const style = {
      id: Date.now(),
      name,
      type,
      left: 10,
      top: 10,
      opacity: 1,
      width: 200,
      height: 150,
      rotate,
      z_index: 2,
      color: '#3c3c3d',
      setCurrentComponent,
      moveElement,
      resizeElement,
      rotateElement,
    };

    setComponents([...components, style]);
  }

  useEffect(() => {
    if (currentComponent) {
      const index = components.findIndex((c) => c.id === currentComponent.id);
      const temp = components.filter((c) => c.id !== currentComponent.id);

      if (currentComponent.name === 'main_frame') {
        components[index].left = left || currentComponent.left;
        components[index].top = top || currentComponent.top;

        if (image) {
          components[index].image = image || currentComponent.image;
        }
      }

      components[index].color = color || currentComponent.color;

      setComponents([...temp, components[index]]);
      setColor('');
      setLeft(0);
      setTop(0);
    }
  }, [color, image, left, top]);

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
                <button
                  onClick={() => createShape('shape', 'rect')}
                  className='h-[90px] cursor-pointer bg-[#3c3c3d]'
                ></button>
                <button
                  onClick={() => createShape('shape', 'circle')}
                  className='h-[90px] cursor-pointer rounded-full bg-[#3c3c3d]'
                ></button>
                <button
                  onClick={() => createShape('shape', 'triangle')}
                  className='h-[90px] cursor-pointer bg-[#3c3c3d]'
                  style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%' }}
                ></button>
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
                      onClick={() =>
                        setImage('http://localhost:4200/proxy-image.jpg')
                      }
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
                  {currentComponent.name === 'main_frame' &&
                    currentComponent.image && (
                      <button
                        className='cursor-pointer bg-slate-600 p-1.5 text-white'
                        onClick={removeBackground}
                      >
                        Remove background
                      </button>
                    )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
