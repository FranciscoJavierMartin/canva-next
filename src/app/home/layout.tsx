import Logout from '@/components/icons/Logout';
import Settings from '@/components/icons/Settings';
import Link from 'next/link';
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
              <button className='peer cursor-pointer'>
                <img
                  className='h-[45px] w-[48px] rounded-full'
                  src='https://templates-flatlogic.herokuapp.com/sing-app/html5/demo/img/people/a5.jpg'
                  alt=''
                />
              </button>
              {/* TODO: Adjust for mobile design */}
              <div className='absolute -right-4 top-14 hidden w-64 border border-gray-700 bg-[#313030] pt-3 transition duration-500 peer-focus-within:block'>
                <div className='flex items-center justify-start gap-5 p-3'>
                  <img
                    className='size-[40px] rounded-full'
                    src='https://templates-flatlogic.herokuapp.com/sing-app/html5/demo/img/people/a5.jpg'
                    alt=''
                  />
                  <div className='flex flex-col items-start justify-center'>
                    <span className='text-sm font-bold text-[#e0dddd]'>
                      John Doe
                    </span>
                    <span className='text-sm font-bold text-[#e0dddd]'>
                      john@doe.com
                    </span>
                  </div>
                </div>
                <ul className='text-[#e0dddd]'>
                  <li className='p-1 transition hover:bg-[#212223]'>
                    <Link className='flex gap-2 p-2' href='/'>
                      <Settings />
                      Settings
                    </Link>
                  </li>
                  <li className='border-t px-1 pb-1 pt-2 transition hover:bg-[#212223]'>
                    <Link className='flex gap-2 p-2' href='/'>
                      <Logout />
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
