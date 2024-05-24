import { ReactNode } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Element from '@/components/Element';

type CreateComponentProps = {
  info: InfoComponent;
  // TODO: Remove undefined
  currentComponent: InfoComponent | undefined;
  removeComponent: Function;
};

export default function CreateComponent({
  info,
  currentComponent,
  removeComponent,
}: CreateComponentProps) {
  const randValue = Math.floor(Math.random() * 1000).toString();
  let html: ReactNode = '';

  if (info.name === 'main_frame') {
    html = (
      <div
        onClick={() => info.setCurrentComponent(info)}
        className='shadow-md hover:border-2 hover:border-indigo-500'
        style={{
          width: info.width + 'px',
          height: info.height + 'px',
          background: info.color,
          zIndex: info.z_index,
        }}
      >
        {info.image && (
          <img className='size-full' src={info.image} alt='image' />
        )}
      </div>
    );
  }

  if (info.name === 'shape' && info.type === 'rect') {
    html = (
      <div
        id={randValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          width: info.width + 'px',
          height: info.height + 'px',
          backgroundColor: info.color,
          opacity: info.opacity,
          left: info.left + 'px',
          top: info.top + 'px',
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : 'rotate(0deg)',
        }}
        className='group absolute hover:border-[2px] hover:border-indigo-500'
      >
        <Element id={randValue} info={info} exId='' />
        {currentComponent?.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className='absolute top-0 hidden cursor-pointer rounded-md bg-white px-3 py-2 group-hover:block'
          >
            <FaTrashAlt />
          </div>
        )}
      </div>
    );
  }

  if (info.name === 'shape' && info.type === 'circle') {
    html = (
      <div
        id={randValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          left: info.left + 'px',
          top: info.top + 'px',
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : 'rotate(0deg)',
        }}
        className='group absolute hover:border-2 hover:border-indigo-500'
      >
        <div
          id={`${randValue}c`}
          className='rounded-full'
          style={{
            width: info.width + 'px',
            height: info.width + 'px',
            background: info.color,
            opacity: info.opacity,
          }}
        ></div>
        <Element id={randValue} info={info} exId={`${randValue}c`} />
        {/* TODO: Move to component */}
        {currentComponent?.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className='absolute top-0 hidden cursor-pointer rounded-md bg-white px-3 py-2 group-hover:block'
          >
            <FaTrashAlt />
          </div>
        )}
      </div>
    );
  }

  if (info.name === 'shape' && info.type === 'triangle') {
    html = (
      <div
        id={randValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          left: info.left + 'px',
          top: info.top + 'px',
          zIndex: info.z_index,
          transform: info.rotate ? `rotate(${info.rotate}deg)` : 'rotate(0deg)',
        }}
        className='group absolute hover:border-2 hover:border-indigo-500'
      >
        <div
          id={`${randValue}t`}
          style={{
            width: info.width + 'px',
            height: info.width + 'px',
            background: info.color,
            opacity: info.opacity,
            clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
          }}
        ></div>
        <Element id={randValue} info={info} exId={`${randValue}t`} />
        {/* TODO: Move to component */}
        {currentComponent?.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className='absolute top-0 hidden cursor-pointer rounded-md bg-white px-3 py-2 group-hover:block'
          >
            <FaTrashAlt />
          </div>
        )}
      </div>
    );
  }

  return html;
}
