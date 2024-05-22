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
                src='https://www.startpage.com/av/proxy-image?piurl=http%3A%2F%2Fwww.wallpapers13.com%2Fwp-content%2Fuploads%2F2015%2F12%2FNature-Lake-Bled.-Desktop-background-image.jpg&sp=1716398712T6c0cfe91bc16bd680cc376ca747add95d22695488724690775950447b886e1c7'
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
