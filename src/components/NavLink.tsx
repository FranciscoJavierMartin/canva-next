'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type NavLinkProps = {
  text: string;
  icon: JSX.Element;
  route: string;
};

export default function NavLink({ text, icon: Icon, route }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={route}
        className={`
          flex
          items-center
          justify-start
          gap-3
          rounded-md
          ${pathname === route ? 'bg-[#ffffff26]' : ''}
          py-2
          px-3
          text-[#e0dddd]`}
      >
        {Icon}
        <span className='font-medium'>{text}</span>
      </Link>
    </li>
  );
}
