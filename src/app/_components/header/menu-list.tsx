import React from 'react';
import { MenuListDesktopItem, type MenuListItem } from '@/app/_components';

const menuListItem: MenuListItem[] = [
  {
    id: 1,
    text: 'صفحه اصلی',
    url: '/',
  },
  {
    id: 2,
    text: 'شعبه',
    url: '/branchs',
    subMenu: [
      {
        id: 1,
        text: 'شعبه اکباتان',
        url: '/branchs/ekabtan',
      },
      {
        id: 2,
        text: 'شعبه چالوس',
        url: 'branchs/chaloos',
      },
      {
        id: 3,
        text: 'شعبه اقدسیه',
        url: 'branchs/aghdasyeh',
      },
      {
        id: 4,
        text: 'شعبه ونک',
        url: 'branchs/vanak',
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
