'use client';
import React from 'react';
import { Header } from '@/app/_components/header';

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col'>
      <Header />
      <main className='mt-7 laptop:mt-10'>{children}</main>
    </div>
  );
};

export default RootLayout;
