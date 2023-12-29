import React from 'react';
import { MenuListDesktopItem, type MenuListItem } from '@/app/ui/components';

const menuListItem: MenuListItem[] = [
  {
    id: 1,
    text: 'صفحه اصلی',
    url: '/',
  },
  {
    id: 2,
    text: 'شعبه ها',
    url: '/branchs',
    subMenu: [
      {
        id: 1,
        text: 'شعبه اکباتان',
        url: '/branch/ekabtan',
      },
      {
        id: 2,
        text: 'شعبه چالوس',
        url: '/branch/chaloos',
      },
      {
        id: 3,
        text: 'شعبه اقدسیه',
        url: '/branch/aghdasyeh',
      },
      {
        id: 4,
        text: 'شعبه ونک',
        url: '/branch/vanak',
      },
    ],
  },
  {
    id: 4,
    text: 'اعظای نمایندگی',
    url: 'deputize',
  },
  {
    id: 5,
    text: 'درباره ما',
    url: '/about-us',
  },
  {
    id: 6,
    text: 'تماس با ما',
    url: '/contact-us',
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
