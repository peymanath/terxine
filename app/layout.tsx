import React from 'react';
import './ui/globals.css';
import Providers from '@/app/providers';
import { estedad } from '@/app/ui/font';

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html
      lang='fa-IR'
      dir='rtl'>
      <body className={`${estedad.variable} antialased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
