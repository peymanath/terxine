'use client';
import React from 'react';
import { SingleSlider, type SingleSliderItems } from '@/app/ui/components';

const sliderItem: SingleSliderItems[] = [
  {
    src: '/images/sliders/food-1.webp',
    title: 'یک ماجراجویی آشپزی برای تمام حواس',
    textButton: 'سفارش غذای آنلاین',
  },
  {
    src: '/images/sliders/neshiman-1.webp',
    title: 'با محیطی دلنشین و با کیفیت',
    textButton: 'رزرو آنلاین میز غذا',
  },
  {
    src: '/images/sliders/food-2.webp',
    title: 'لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!',
  },
];

export const BranchHeroSection: React.FC = () => {
  return (
    <SingleSlider
      sliderItems={sliderItem}
      isPagination
      isBackdrop
    />
  );
};
