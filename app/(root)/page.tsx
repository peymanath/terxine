'use client';
import React from 'react';
import { SingleSlider, type SingleSliderItems } from '@/app/ui/components';

const SingleSliderItem: SingleSliderItems[] = [
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

const Home: React.FC = () => {
  return (
    <div className='flex flex-col gap-6 '>
      <SingleSlider sliderItems={SingleSliderItem} />
    </div>
  );
};
export default Home;
