import { PropsWithChildren } from 'react';

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div className='min-h-screen w-full bg-[#18191b]'>
      <div className='fixed left-0 top-0 z-20 w-full bg-[#212223] shadow-md'>
        <div className='m-auto w-[93%] py-3'>
          <div className='flex items-center justify-between'>
            <div className='h-[48px] w-[80px]'>
              <img
                src='https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg'
                alt='Logo'
                role='presentation'
                width={80}
                height={30}
                className='size-full'
              />
            </div>
            <div className='relative flex items-center justify-center gap-4'>
              <button className='overflow-hidden rounded-[3px] bg-[#8b3dff] px-3 py-2 text-center font-medium text-white'>
                Create a design
              </button>
              <div className='cursor-pointer'>
                <img
                  className='h-[45px] w-[48px] rounded-full'
                  src='https://templates-flatlogic.herokuapp.com/sing-app/html5/demo/img/people/a5.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
