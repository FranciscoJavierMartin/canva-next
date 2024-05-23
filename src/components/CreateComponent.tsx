import { ReactNode } from 'react';

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
      ></div>
    );
  }

  return html;
}
