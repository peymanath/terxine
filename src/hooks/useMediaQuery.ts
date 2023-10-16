'use client';

import { useEffect, useState } from 'react';
import { MediaQueryEnum } from '@/types/hooks.types';

export const useMediaQuery = (minWidth: MediaQueryEnum): boolean => {
  const generateMinWidth: Record<MediaQueryEnum, number> = {
    [MediaQueryEnum.MOBILE]: 576,
    [MediaQueryEnum.TABLET]: 768,
    [MediaQueryEnum.LAPTOP]: 992,
    [MediaQueryEnum.DESKTOP]: 1224,
  };

  const [state, setState] = useState({
    windowWidth: window.innerWidth,
    isDesiredWidth: false,
  });

  useEffect(() => {
    const resizeHandler = (): void => {
      const currentWindowWidth: number = window.innerWidth;
      const isDesiredWidth: boolean = currentWindowWidth < generateMinWidth[minWidth];
      setState({ windowWidth: currentWindowWidth, isDesiredWidth });
    };
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [state.windowWidth]);

  return state.isDesiredWidth;
};
