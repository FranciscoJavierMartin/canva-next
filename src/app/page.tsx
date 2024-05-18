import Modal from '@/components/Modal';
import Link from 'next/link';

export default function Home({ searchParams }: SearchParamsProps) {
  const show = searchParams?.show === 'true';

  return (
    <div className='bg-[#18191b] min-h-screen w-full'>
      {show && <Modal />}
      <div className='bg-[#212223] shadow-md'>
        <div className='w-[93%] m-auto py-3'>
          <div className='flex justify-between items-center'>
            <div className='w-[80px] h-[48px]'>
              <img
                src='https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg'
                alt='Logo'
                role='presentation'
                width={80}
                height={30}
                className='size-full'
              />
            </div>
            <div className='flex gap-4'>
              <Link
                href='/?show=true'
                className='py-2 w-[80px] text-center bg-teal-700 text-white  rounded-md font-medium transition-all hover:bg-teal-500'
              >
                Sign In
              </Link>
              <button className='py-2 w-[80px] text-center bg-purple-700 text-white  rounded-md font-medium transition-all hover:bg-purple-500'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='size-full justify-center items-center p-4'>
        <div className='py-[170px] flex justify-center items-center flex-col gap-6'>
          <h2 className='text-5xl text-[#c7c5c5] font-bold'>
            What you will design today?
          </h2>
          <span className='text-[#aca9a9] text-2xl font-medium'>
            Canva makes it easy to create and share professional designs.
          </span>
          <button className='py-2 w-[200px] text-center bg-purple-700 text-white rounded-md font-medium transition-all hover:bg-purple-500'>
            Sign Up for free
          </button>
        </div>
      </div>
    </div>
  );
}
