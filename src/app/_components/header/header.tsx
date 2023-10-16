'use client';

import React from 'react';
import { Logo } from '@/app/_components/common/logo';
import { Button } from '@/app/_components/common/button';
import { CartSmile, MenuLineHorizontal, Search, User } from 'react-huge-icons/outline';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQueryEnum } from '@/types/hooks.types';

export const Header: React.FC = () => {
  const isMobile = useMediaQuery(MediaQueryEnum.MOBILE);
  const isLaptop = useMediaQuery(MediaQueryEnum.LAPTOP);

  console.log({ isMobile, isLaptop });

  return (
    <div className='w-full flex items-center justify-between fixed top-0 right-0 left-0 py-2.5 desktop:py-4'>
      <div className='container flex items-center justify-between bg-white'>
        {isMobile && (
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
            size={isMobile ? 'small' : 'large'}
          />
        </div>
        {!isLaptop && <div>Menu</div>}
        <div className='flex items-center justify-between gap-1'>
          {!isMobile && (
            <Button
              shape='square'
              size='large'
              color='tint-50'
              icon={<Search className='w-3 h-3' />}
            />
          )}
          <Button
            shape='square'
            size={isMobile ? 'small' : 'large'}
            color='tint-50'
            icon={<CartSmile className='w-3 h-3' />}
          />
          <Button
            shape='square'
            size={isMobile ? 'small' : 'large'}
            color='tint-50'
            icon={<User className='w-3 h-3' />}
          />
        </div>
      </div>
    </div>
  );
};
