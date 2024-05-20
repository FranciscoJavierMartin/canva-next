import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';

type ModalProps = {
  goBackRoute: string;
};

export default function Modal({
  children,
  goBackRoute,
}: PropsWithChildren<ModalProps>) {
  return (
    <div className='visible fixed z-50 flex h-screen w-screen items-center justify-center bg-[#252627ad] transition-all duration-500'>
      <div className='relative m-auto w-[350px] rounded-md bg-[#323335] px-6 py-4'>
        <Link
          href={goBackRoute}
          className='absolute right-4 top-4 cursor-pointer text-xl text-white'
        >
          <RxCross2 />
        </Link>
        {children}
      </div>
    </div>
  );
}
