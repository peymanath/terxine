import React from 'react';
import { Logo } from '@/app/_components/common/logo';
import { Button } from '@/app/_components/common/button';
import { CartSmile, Search, User } from 'react-huge-icons/outline';

export const Header: React.FC = () => {
  return (
    <div className='w-full flex items-center justify-between fixed top-0 right-0 left-0 py-2.5 lg:py-4'>
      <div className='container flex items-center justify-between bg-white'>
        <div>
          <Logo
            type='both'
            size='large'
          />
        </div>
        <div>Menu</div>
        <div className='flex items-center justify-between gap-1'>
          <Button
            shape='square'
            size='large'
            color='tint-50'
            icon={<Search className='w-4 h-4' />}
          />
          <Button
            shape='square'
            size='large'
            color='tint-50'
            icon={<CartSmile className='w-4 h-4' />}
          />
          <Button
            shape='square'
            size='large'
            color='tint-50'
            icon={<User className='w-4 h-4' />}
          />
        </div>
      </div>
    </div>
  );
};
