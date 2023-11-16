import localFont from 'next/font/local';

export const estedad = localFont({
  variable: '--font-estedad',
  src: [
    // Regular
    {
      path: '../../public/fonts/Estedad-Regular.woff2',
      style: 'normal',
      weight: '',
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
