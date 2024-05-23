import Link from 'next/link';
import { FaTrashAlt } from 'react-icons/fa';

export default function Carousel() {
  return (
    <div className='no-scrollbar inline-flex snap-mandatory overflow-x-scroll scroll-smooth'>
      <div className='box-content flex flex-none snap-start'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((d) => (
          <div className='group relative h-[170px] w-full px-2' key={d}>
            <Link
              href='/'
              className='block h-full w-full rounded-md bg-slate-100 p-4'
            >
              <img
                className='h-full w-full overflow-hidden rounded-md'
                src='http://localhost:4200/proxy-image.jpg'
                alt=''
              />
            </Link>
            <div className='absolute right-2 top-1 hidden cursor-pointer p-2 text-red-500 transition-all duration-500 group-hover:block'>
              <FaTrashAlt />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
