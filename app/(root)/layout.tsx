'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/app/ui/components').then(named => named.Header), {
  ssr: false,
});

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col'>
      <Header />
      <main className='mt-7 laptop:mt-10'>{children}</main>
    </div>
  );
};

export default RootLayout;
