'use client';
import React from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import {
  FoodCard,
  type FoodCardProps,
  FoodCardSize,
  HeroSectionSlider,
  type HeroSectionSliderItems,
  Slider,
} from '@/app/_components';

const heroSectionSliderItem: HeroSectionSliderItems[] = [
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

const relatedSliderItem: FoodCardProps[] = [
  {
    id: 1,
    rate: 5,
    basePrice: 150_000,
    totalRating: 62,
    discountTotal: 175_000,
    discountPerssentage: 20,
    title: 'دلم کلم برگ',
    variant: 'vertical',
    imageUrl: '/images/foods/dolme-barg-kalam.webp',
  },
  {
    id: 2,
    rate: 4,
    basePrice: 136_000,
    totalRating: 32,
    discountTotal: 150_000,
    discountPerssentage: 18,
    title: 'بادمجون شکم پر',
    variant: 'vertical',
    imageUrl: '/images/foods/bademjan-shekam-por.webp',
  },
  {
    id: 3,
    rate: 5,
    basePrice: 177_000,
    totalRating: 62,
    discountTotal: 190_000,
    discountPerssentage: 17,
    title: 'کالزونه اسفناج',
    variant: 'vertical',
    imageUrl: '/images/foods/spinach-calzone.webp',
  },
  {
    id: 4,
    rate: 3,
    basePrice: 175_000,
    totalRating: 33,
    discountTotal: 215_000,
    discountPerssentage: 25,
    title: 'پیتزا قارچ',
    variant: 'vertical',
    imageUrl: '/images/foods/eda-picca_pizza.webp',
  },
  {
    id: 5,
    rate: 5,
    basePrice: 150_000,
    totalRating: 50,
    title: 'پاستا سبزیجات',
    variant: 'vertical',
    imageUrl: '/images/foods/pasta-primavera.webp',
  },
];

const Home: React.FC = () => {
  // Use Hooks
  const { isLaptop } = useMediaQuery();
  const sliders = relatedSliderItem.map(item => (
    <FoodCard
      {...item}
      key={item.id}
      size={FoodCardSize[isLaptop ? 'Large' : 'Small']}
    />
  ));

  return (
    <div className='flex flex-col gap-6 '>
      <HeroSectionSlider sliderItems={heroSectionSliderItem} />
      <div className='container flex flex-col gap-1.5 laptop:gap-3'>
        <h2 className='text-header-6 laptop:text-header-4'>پیشنهاد ویژه</h2>
        <Slider
          items={sliders}
          isButton
        />
      </div>
      <div className='bg-tint-600 pt-3 pb-5'>
        <div className='container flex flex-col gap-1.5 laptop:gap-3 bg-tint-600'>
          <h2 className='text-header-6 laptop:text-header-4 text-white'>غذاهای محبوب</h2>
          <Slider
            items={sliders}
            isButton
          />
        </div>
      </div>
      <div className='container flex flex-col gap-1.5 laptop:gap-3'>
        <h2 className='text-header-6 laptop:text-header-4'>غذاهای غیر ایرانی</h2>
        <Slider
          items={sliders}
          isButton
        />
      </div>
    </div>
  );
};
export default Home;
