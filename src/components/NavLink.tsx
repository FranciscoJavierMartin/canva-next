'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

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
        className={clsx(
          'flex items-center justify-start gap-3 rounded-md px-3 py-2 text-[#e0dddd]',
          pathname === route && 'bg-[#ffffff26]',
        )}
      >
        {Icon}
        <span className='font-medium'>{text}</span>
      </Link>
    </li>
  );
}
