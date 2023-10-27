import type React from 'react';
import { type SwiperRef } from 'swiper/react';
import { type SwiperOptions } from 'swiper/types';

export type CarouselSliderProps = {
  items: React.ReactNode[];
  ref?: React.RefObject<SwiperRef>;
  spaceBetween?: number;
  slidesPerView?: number;
  breakpoints?: Record<number, SwiperOptions> & Record<string, SwiperOptions>;
  isButton?: boolean;
};
