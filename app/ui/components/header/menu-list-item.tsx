import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { MenuListItem } from '@/app/ui/components';
import { DropDownMenu } from '../drop-down-menu';
import classNames from 'classnames';

export const MenuListDesktopItem: React.FC<MenuListItem> = ({ id, text, url, subMenu }) => {
  // Use Hooks
  const pathName: string = usePathname();

  // Constant
  const isActive: boolean = pathName === url;

  const classes = classNames(
    'transition-colors flex items-center justify-between gap-0.5 pb-0.5',
    {
      'text-header-5 text-primary border-b border-primary': isActive,
    },
    {
      'text-gray-700 hover:text-primary hover:font-bold text-body-lg': !isActive,
    }
  );

  return subMenu && subMenu?.length > 0 ? (
    <DropDownMenu
      title={text}
      url={url}
      items={subMenu.map(item => ({ title: item.text, href: item.url }))}
      className={classes}
    />
  ) : (
    <li
      key={id}
      className={classes}>
      <Link href={url}>{text}</Link>
    </li>
  );
};
