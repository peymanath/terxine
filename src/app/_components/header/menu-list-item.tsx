import React from 'react';
import Link from 'next/link';
import { DirectionDown } from 'react-huge-icons/outline';
import { usePathname } from 'next/navigation';
import type { MenuListItem } from '@/app/_components';

export const MenuListDesktopItem: React.FC<MenuListItem> = ({ id, text, url, subMenu }) => {
  // Use Hooks
  const pathName: string = usePathname();

  // Constant
  const isActive: boolean = pathName === url;
  const classActive: string = isActive
    ? 'text-header-5 text-primary border-b border-primary'
    : 'text-gray-700 hover:text-primary hover:font-bold text-body-lg';

  return (
    <li
      key={id}
      className={`transition-colors flex items-center justify-between gap-0.5 pb-0.5 ${classActive}`}>
      <Link href={url}>{text}</Link>
      {subMenu && subMenu?.length > 0 && <DirectionDown className='h-2.5 w-2.5 cursor-pointer' />}
    </li>
  );
};
