'use client';

import React from 'react';
import type { MediaQueryReturn } from '@/types/hooks.types';
import { useIsClient } from '@/hooks/useClientCtx';

export const useMediaQuery = (): MediaQueryReturn => {
  // Use Hooks
  const isClient = useIsClient();

  // States;
  const [width, setWidth] = React.useState(isClient ? window.innerWidth : 0);

  const handleWindowSizeChange = (): void => {
    isClient && setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    isClient && window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      isClient && window.addEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 576;
  const isTablet = width <= 768;
  const isLaptop = width <= 992;
  const isDesktop = width <= 1224;

  return { isMobile, isTablet, isLaptop, isDesktop };
};
