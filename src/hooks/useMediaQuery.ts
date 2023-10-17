'use client';

import { useEffect, useState } from 'react';
import type { MediaQueryReturn } from '@/types/hooks.types';

export const useMediaQuery = (): MediaQueryReturn => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = (): void => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 576;
  const isTablet = width <= 768;
  const isLaptop = width <= 992;
  const isDesktop = width <= 1224;

  return { isMobile, isTablet, isLaptop, isDesktop };
};
