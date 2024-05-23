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

  return html;
}
