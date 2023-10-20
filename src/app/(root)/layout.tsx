'use client';
import React from 'react';
import { Header } from '@/app/_components/header';
import Providers from '@/providers';

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col'>
      <Header />
      <main className='mt-7 laptop:mt-10'>
        <Providers>{children}</Providers>
      </main>
    </div>
  );
};

export default RootLayout;
