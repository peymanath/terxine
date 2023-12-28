'use client';

import React from 'react';
import type { MediaQueryReturn } from '@/app/types';

export const useMediaQuery = (): MediaQueryReturn => {
  const [responsive, setResponsive] = React.useState<MediaQueryReturn>({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
  });

  React.useEffect(() => {
    const mobileQuery = window.matchMedia('(min-width: 0px)');
    const tabletQuery = window.matchMedia('(min-width: 576px)');
    const laptopQuery = window.matchMedia('(min-width: 768px)');
    const desktopQuery = window.matchMedia('(min-width: 992px)');

    const handleResize = () => {
      setResponsive({
        isMobile: mobileQuery.matches,
        isTablet: tabletQuery.matches,
        isLaptop: laptopQuery.matches,
        isDesktop: desktopQuery.matches,
      });
    };

    handleResize();
    mobileQuery.addEventListener('change', handleResize);
    tabletQuery.addEventListener('change', handleResize);
    laptopQuery.addEventListener('change', handleResize);
    desktopQuery.addEventListener('change', handleResize);

    // Clean up the event listeners when the component unmounts
    return () => {
      mobileQuery.removeEventListener('change', handleResize);
      tabletQuery.removeEventListener('change', handleResize);
      laptopQuery.removeEventListener('change', handleResize);
      desktopQuery.removeEventListener('change', handleResize);
      handleResize();
    };
  }, []);

  return responsive;
};
