'use client';

import { useEffect, useState } from 'react';
import type { MediaQueryReturn } from '@/types/hooks.types';

export const useMediaQuery = (): MediaQueryReturn => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  const handleWindowSizeChange = (): void => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleWindowSizeChange);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', handleWindowSizeChange);
      }
    };
  }, []);

  const isMobile = width <= 576;
  const isTablet = width <= 768;
  const isLaptop = width <= 992;
  const isDesktop = width <= 1224;

  return { isMobile, isTablet, isLaptop, isDesktop };
};
