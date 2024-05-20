import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';
import LoginForm from './LoginForm';

export default function Modal() {
  return (
    // <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto size-full flex items-center justify-center'>
    //   <div className='p-8 border w-96 shadow-lg rounded-md bg-white'>
    //     <div className='text-center'>
    //       <h3 className='text-2xl font-bold text-gray-900'>Modal title</h3>
    //       <div className='mt-2 px-7 py-3'>
    //         <p className='text-lg text-gray-500'>Modal body</p>
    //       </div>
    //       <div className='flex justify-center mt-4'>
    //         <Link
    //           href='/'
    //           className='px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300'
    //         >
    //           Close
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='visible fixed z-50 flex h-screen w-screen items-center justify-center bg-[#252627ad] transition-all duration-500'>
      <div className='relative m-auto w-[350px] rounded-md bg-[#323335] px-6 py-4'>
        <div className='absolute right-4 top-4 cursor-pointer text-xl text-white'>
          <RxCross2 />
        </div>
        {/* Children */}
        <LoginForm />
      </div>
    </div>
  );
}
