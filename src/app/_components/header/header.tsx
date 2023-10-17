'use client';

import React from 'react';
import { Logo } from '@/app/_components/common/logo';
import { Button } from '@/app/_components/common/button';
import { CartSmile, MenuLineHorizontal, Search, User } from 'react-huge-icons/outline';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export const Header: React.FC = () => {
  const { isTablet } = useMediaQuery();

  return (
    <div className='w-full flex items-center justify-between fixed top-0 right-0 left-0 py-2.5 desktop:py-4'>
      <div className='container flex items-center justify-between bg-white'>
        {isTablet && (
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
            size={isTablet ? 'small' : 'large'}
          />
        </div>
        {!isTablet && <div>Menu</div>}
        <div className='flex items-center justify-between gap-1'>
          {!isTablet && (
            <Button
              shape='square'
              size='large'
              color='tint-50'
              icon={<Search className='w-3 h-3' />}
            />
          )}
          <Button
            shape='square'
            size={isTablet ? 'small' : 'large'}
            color='tint-50'
            icon={<CartSmile className='w-3 h-3' />}
          />
          <Button
            shape='square'
            size={isTablet ? 'small' : 'large'}
            color='tint-50'
            icon={<User className='w-3 h-3' />}
          />
        </div>
      </div>
    </div>
  );
};
