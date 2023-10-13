import React from 'react';
import './globals.css';
import localFont from 'next/font/local';

const estedad = localFont({
  variable: '--font-estedad',
  src: [
    // Regular
    {
      path: '../../public/fonts/Estedad-Regular.woff2',
      style: 'normal',
      weight: '400',
    },

    // Medium
    {
      path: '../../public/fonts/Estedad-Medium.woff2',
      style: 'normal',
      weight: '500',
    },

    // semiBold
    {
      path: '../../public/fonts/Estedad-SemiBold.woff2',
      style: 'normal',
      weight: '600',
    },

    // Bold
    {
      path: '../../public/fonts/Estedad-Bold.woff2',
      style: 'normal',
      weight: '700',
    },
  ],
});

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html
      lang='fa-IR'
      dir='rtl'>
      <body className={estedad.variable}>{children}</body>
    </html>
  );
};

export default RootLayout;
