import Modal from '@/components/Modal';
import Link from 'next/link';
import LoginForm from '@/components/LoginForm';

export default function Home({ searchParams }: SearchParamsProps) {
  const show = searchParams?.show === 'true';

  return (
    <div className='min-h-screen w-full bg-[#18191b]'>
      {show && (
        <Modal>
          <LoginForm />
        </Modal>
      )}
      <div className='bg-[#212223] shadow-md'>
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
            <div className='flex gap-4'>
              <Link
                href='/?show=true'
                className='w-[80px] rounded-md bg-teal-700 py-2 text-center  font-medium text-white transition-all hover:bg-teal-500'
              >
                Sign In
              </Link>
              <button className='w-[80px] rounded-md bg-purple-700 py-2 text-center  font-medium text-white transition-all hover:bg-purple-500'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='size-full items-center justify-center p-4'>
        <div className='flex flex-col items-center justify-center gap-6 py-[170px]'>
          <h2 className='text-5xl font-bold text-[#c7c5c5]'>
            What you will design today?
          </h2>
          <span className='text-2xl font-medium text-[#aca9a9]'>
            Canva makes it easy to create and share professional designs.
          </span>
          <button className='w-[200px] rounded-md bg-purple-700 py-2 text-center font-medium text-white transition-all hover:bg-purple-500'>
            Sign Up for free
          </button>
        </div>
      </div>
    </div>
  );
}
