'use client';

import React from 'react';
import type { MediaQueryReturn } from '@/types/hooks.types';
import { useIsClient } from '@/hooks/useClientCtx';

export const useMediaQuery = (): MediaQueryReturn => {
  // Use Hooks
  const isClient = useIsClient();

  // States;
  const [width, setWidth] = React.useState((isClient && window.innerWidth) || 0);

  const [responsive, serResponsive] = React.useState<MediaQueryReturn>({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
  });

  React.useEffect(() => {
    const handler = (): void => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handler);

    return () => {
      window.addEventListener('resize', handler);
    };
  }, []);

  React.useEffect(() => {
    serResponsive(() => {
      return {
        isMobile: width <= 576,
        isTablet: width <= 768,
        isLaptop: width <= 992,
        isDesktop: width <= 1224,
      };
    });
  }, [width]);

  return responsive;
};
