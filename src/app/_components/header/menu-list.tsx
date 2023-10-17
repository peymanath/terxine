import React from 'react';
import type { MenuListItem } from '@/app/_components/header/menu.types';
import { MenuListDesktopItem } from '@/app/_components/header/menu-list-item';

const menuListItem: MenuListItem[] = [
  {
    id: 1,
    text: 'صفحه اصلی',
    url: '/',
  },
  {
    id: 2,
    text: 'شعبه',
    url: '/',
    subMenu: [
      {
        id: 1,
        text: 'شعبه اکباتان',
        url: '/',
      },
      {
        id: 2,
        text: 'شعبه چالوس',
        url: '/',
      },
      {
        id: 3,
        text: 'شعبه اقدسیه',
        url: '/',
      },
      {
        id: 4,
        text: 'شعبه ونک',
        url: '/',
      },
    ],
  },
  {
    id: 4,
    text: 'اعظای نمایندگی',
    url: '/',
  },
  {
    id: 5,
    text: 'درباره ما',
    url: '/',
  },
  {
    id: 6,
    text: 'تماس با ما',
    url: '/',
  },
];

export const MenuListDesktop: React.FC = () => {
  return (
    <ul className='flex flex-wrap flex-row items-center justify-between gap-3'>
      {menuListItem.map(item => (
        <MenuListDesktopItem
          key={item.id}
          {...item}
        />
      ))}
    </ul>
  );
};
