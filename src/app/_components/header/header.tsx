'use client';

import React from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { CartSmile, MenuLineHorizontal, Search, User } from 'react-huge-icons/outline';
import { Button, Logo, MenuListDesktop } from '@/app/_components';

export const Header: React.FC = () => {
  const { isLaptop } = useMediaQuery();

  return (
    <header className='bg-white w-full flex items-center justify-between fixed top-0 right-0 left-0 h-7 laptop:h-10 shadow-2 z-50'>
      <div className='container flex items-center justify-between'>
        {!isLaptop && (
          <Button
            shape='square'
            size='large'
            variant='link'
            icon={<MenuLineHorizontal className='w-full h-full' />}
          />
        )}
        <div>
          <Logo
            type='both'
            size={!isLaptop ? 'small' : 'large'}
          />
        </div>
        {isLaptop && <MenuListDesktop />}
        <div className='flex items-center justify-between gap-1'>
          {isLaptop && (
            <Button
              shape='square'
              size='large'
              color='tint-50'
              icon={<Search className='w-3 h-3' />}
            />
          )}
          <Button
            shape='square'
            size={!isLaptop ? 'small' : 'large'}
            color='tint-50'
            icon={<CartSmile className='w-3 h-3' />}
          />
          <Button
            shape='square'
            size={!isLaptop ? 'small' : 'large'}
            color='tint-50'
            icon={<User className='w-3 h-3' />}
          />
        </div>
      </div>
    </header>
  );
};
