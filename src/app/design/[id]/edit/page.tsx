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
import { getDesign } from '@/actions/get-design';

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

export default function EditDesignPage({ params }: { params: { id: string } }) {
  const { id: designId } = params;
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
    opacity: 1,
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
  ]);
  const [color, setColor] = useState<string>('#fff');
  const [image, setImage] = useState<string>('');
  const [rotate, setRotate] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [top, setTop] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [padding, setPadding] = useState<number>(0);
  const [fontSize, setFontSize] = useState<number>(16);
  const [weight, setWeight] = useState(400);
  const [text, setText] = useState<string>('');
  const [opacity, setOpacity] = useState<number>(1);
  const [zIndex, setZIndex] = useState<number>(1);
  const [radius, setRadius] = useState<number>(0);

  function setElements(type: ElementType, name: string): void {
    setState(type);
    setShow({
      status: false,
      name,
    });
  }

  function moveElement(id: string, currentInfo: InfoComponent): void {
    let isMoving: boolean = true;
    setCurrentComponent(currentInfo);

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

  function resizeElement(id: string, currentInfo: InfoComponent): void {
    let isMoving: boolean = true;
    setCurrentComponent(currentInfo);

    const currentDiv = document.getElementById(id);

    function mouseMove({ movementX, movementY }: MouseEvent): void {
      if (currentDiv) {
        const getStyle = window.getComputedStyle(currentDiv);
        const width = parseInt(getStyle.width);
        const height = parseInt(getStyle.height);

        if (isMoving) {
          currentDiv.style.width = `${width + movementX}px`;
          currentDiv.style.height = `${height + movementY}px`;
        }
      }
    }

    function mouseUp(): void {
      isMoving = false;
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseup', mouseUp);
      setWidth(parseInt(currentDiv?.style.width || '0'));
      setHeight(parseInt(currentDiv?.style.height || '0'));
    }

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', mouseUp);
  }

  function rotateElement(id: string, currentInfo: InfoComponent): void {
    let isMoving: boolean = true;
    setCurrentComponent(currentInfo);

    const currentDiv = document.getElementById(id);

    function mouseMove({ pageX, pageY }: MouseEvent): void {
      if (currentDiv) {
        const boundingRect = currentDiv.getBoundingClientRect();
        const figureCenter = {
          x: boundingRect.left + boundingRect.width / 2,
          y: boundingRect.top + boundingRect.height / 2,
        };

        const angle =
          Math.atan2(pageX - figureCenter.x, -(pageY - figureCenter.y)) *
          (180 / Math.PI);

        if (isMoving) {
          currentDiv.style.transform = `rotate(${angle}deg)`;
        }
      }
    }

    function mouseUp(): void {
      isMoving = false;
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseup', mouseUp);
      const angle = parseFloat(
        currentDiv?.style.transform
          .split('(')[1]
          .split(')')[0]
          .split(',')[0]
          .replace('deg', '') || '0',
      );
      setRotate(angle);
    }

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', mouseUp);
  }

  function removeElement(id: number): void {
    const temp = components.filter((c) => c.id !== id);
    setCurrentComponent(undefined);
    // TODO: Use 'prev'
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
    const style: InfoComponent = {
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
      image: '',
    };

    // TODO: Use 'prev'
    setComponents([...components, style]);
  }

  function addText(name: string, type: any): void {
    const style: InfoComponent = {
      id: Date.now(),
      name,
      type,
      left: 10,
      top: 10,
      opacity: 1,
      rotate,
      z_index: 1,
      padding: 6,
      fontSize: 22,
      text: 'Add you text',
      weight: 400,
      color: '#3c3c3d',
      height: 100,
      width: 200,
      image: '',
      setCurrentComponent,
      moveElement,
      resizeElement,
      rotateElement,
    };

    setWeight(400);
    setFontSize(16);
    setCurrentComponent(style);
    // TODO: Use 'prev'
    setComponents([...components, style]);
  }

  function addImage(img: string): void {
    setCurrentComponent(undefined);

    const style: InfoComponent = {
      id: Date.now(),
      name: 'image',
      type: 'image',
      left: 10,
      top: 10,
      opacity: 1,
      width: 200,
      height: 150,
      rotate,
      z_index: 2,
      radius: 0,
      image: img,
      setCurrentComponent,
      moveElement,
      resizeElement,
      rotateElement,
    };

    setCurrentComponent(style);
    setComponents([...components, style]);
  }

  useEffect(() => {
    if (currentComponent) {
      const index = components.findIndex((c) => c.id === currentComponent.id);
      const temp = components.filter((c) => c.id !== currentComponent.id);

      if (currentComponent.name !== 'text') {
        components[index].width = width || currentComponent.width;
        components[index].height = height || currentComponent.height;
        components[index].rotate = rotate || currentComponent.rotate;
      }

      if (currentComponent.name === 'text') {
        components[index].fontSize = fontSize || currentComponent.fontSize;
        components[index].padding = padding || currentComponent.padding;
        components[index].weight = weight || currentComponent.weight;
        components[index].text = text || currentComponent.text;
      }

      if (currentComponent.name === 'image') {
        components[index].radius = radius || currentComponent.radius;
      }

      if (currentComponent.name === 'main_frame' && image) {
        components[index].image = image || currentComponent.image;
      }

      if (currentComponent.name !== 'main_frame') {
        components[index].left = left || currentComponent.left;
        components[index].top = top || currentComponent.top;
        components[index].opacity = opacity || currentComponent.opacity;
        components[index].z_index = zIndex || currentComponent.z_index;
      }

      components[index].color = color || currentComponent.color;

      setComponents([...temp, components[index]]);
      setColor('');
      setLeft(0);
      setTop(0);
      setRotate(0);
      // TODO: Check setOpacity(1)
      setOpacity(1);
      setZIndex(0);
      setText('');
    }
  }, [
    color,
    image,
    left,
    top,
    width,
    height,
    rotate,
    opacity,
    zIndex,
    padding,
    fontSize,
    weight,
    text,
    radius,
  ]);

  useEffect(() => {
    (async () => {
      try {
        const { design } = await getDesign(designId);

        setComponents([
          ...design.map((component) => ({
            ...component,
            setCurrentComponent: setCurrentComponent,
            moveElement: moveElement,
            resizeElement: resizeElement,
            rotateElement: rotateElement,
            removeBackground: removeBackground,
          })),
        ]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [designId]);

  return (
    <div className='h-screen w-screen bg-black'>
      <Header components={components} designId={designId} />
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
            {state === 'image' && <MyImages addImage={addImage} />}
            {state === 'text' && (
              <div className='grid grid-cols-1 gap-2'>
                <div
                  onClick={() => addText('text', 'title')}
                  className='cursor-pointer rounded-sm bg-[#3c3c3d] p-3 text-xl font-bold text-white'
                >
                  <h2>Add a text</h2>
                </div>
              </div>
            )}
            {state === 'project' && (
              <div className='grid grid-cols-2 gap-2'></div>
            )}
            {state === 'initImage' && (
              <div className='no-scrollbar flex h-[88vh] items-start justify-start overflow-x-auto'>
                <ImageGallery addImage={addImage} />
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
                        setImage('http://localhost:4200/images/proxy-image.jpg')
                      }
                    >
                      <img
                        className='size-full object-fill'
                        src='http://localhost:4200/images/proxy-image.jpg'
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
                  {currentComponent?.name !== 'main_frame' && (
                    <div className='flex flex-col gap-6'>
                      <div className='flex items-center justify-start gap-3'>
                        <span>Opacity</span>
                        <input
                          type='range'
                          onChange={(e) =>
                            setOpacity(parseFloat(e.target.value))
                          }
                          min={0}
                          max={1}
                          step={0.05}
                          value={currentComponent.opacity}
                        />
                      </div>
                      <div className='flex items-start justify-start gap-1'>
                        <span className='w-[70px]'>Z-Index</span>
                        <input
                          onChange={(e) => setZIndex(parseInt(e.target.value))}
                          type='number'
                          min={0}
                          max={9999}
                          step={1}
                          value={currentComponent.z_index}
                          className='flex-grow rounded-md border border-gray-700 bg-transparent px-2 text-right outline-none'
                        />
                      </div>
                      {currentComponent.name === 'image' && (
                        <div className='flex items-start justify-start gap-1'>
                          <span className='w-[70px]'>Radius</span>
                          <input
                            onChange={(e) =>
                              setRadius(parseInt(e.target.value))
                            }
                            type='number'
                            step={1}
                            min={0}
                            max={90}
                            value={currentComponent.radius}
                            className='flex-grow rounded-md border border-gray-700 bg-transparent px-2 text-right outline-none'
                          />
                        </div>
                      )}
                      {currentComponent.name === 'text' && (
                        <>
                          <div className='flex items-start justify-start gap-1'>
                            <span className='w-[70px]'>Padding</span>
                            <input
                              type='number'
                              min={0}
                              max={100}
                              step={1}
                              value={currentComponent.padding}
                              onChange={(e) =>
                                setPadding(parseInt(e.target.value))
                              }
                              className='flex-grow rounded-md border border-gray-700 bg-transparent px-2 text-right outline-none'
                            />
                          </div>
                          <div className='flex items-start justify-start gap-1'>
                            <span className='w-[70px]'>Font size</span>
                            <input
                              type='number'
                              min={0}
                              max={100}
                              step={1}
                              value={currentComponent.fontSize}
                              onChange={(e) =>
                                setFontSize(parseInt(e.target.value))
                              }
                              className='flex-grow rounded-md border border-gray-700 bg-transparent px-2 text-right outline-none'
                            />
                          </div>
                          <div className='flex items-start justify-start gap-1'>
                            <span className='w-[70px]'>Weight</span>
                            <input
                              type='number'
                              min={0}
                              max={1000}
                              step={100}
                              value={currentComponent.weight}
                              onChange={(e) =>
                                setWeight(parseInt(e.target.value))
                              }
                              className='flex-grow rounded-md border border-gray-700 bg-transparent px-2 text-right outline-none'
                            />
                          </div>
                          <div className='flex flex-col items-start justify-start gap-2'>
                            {/* TODO: Replace for an textarea */}
                            <input
                              onChange={(e) =>
                                setCurrentComponent(
                                  (prev: InfoComponent | undefined) =>
                                    !!prev
                                      ? ({
                                          ...prev,
                                          text: e.target.value,
                                        } as InfoComponent)
                                      : undefined,
                                )
                              }
                              value={currentComponent.text}
                              className='rounded-md border border-gray-700 bg-transparent p-2 outline-none'
                              type='text'
                            />
                            <button
                              onClick={() => setText(currentComponent.text)}
                              className='w-full rounded-md bg-purple-500 px-4 py-2 text-xs text-white'
                            >
                              Add text
                            </button>
                          </div>
                        </>
                      )}
                    </div>
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
