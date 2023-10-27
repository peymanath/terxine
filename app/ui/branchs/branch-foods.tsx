'use client';
import React from 'react';
import { SpringNotes } from 'react-huge-icons/outline';
import { useMediaQuery } from '@/app/lib';
import { FoodCardSize } from '@/app/ui/enums';
import { Button, CarouselSlider, FoodCard, type FoodCardProps } from '@/app/ui/components';

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

export const BranchFoods: React.FC = () => {
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
    <React.Fragment>
      <div className='container flex flex-col gap-1.5 laptop:gap-3'>
        <h2 className='text-header-6 laptop:text-header-4'>پیشنهاد ویژه</h2>
        <CarouselSlider
          items={sliders}
          isButton
        />
      </div>
      <div className='bg-tint-600 pt-3 pb-5'>
        <div className='container flex flex-col gap-1.5 laptop:gap-3 bg-tint-600'>
          <h2 className='text-header-6 laptop:text-header-4 text-white'>غذاهای محبوب</h2>
          <CarouselSlider
            items={sliders}
            isButton
          />
        </div>
      </div>
      <div className='container flex flex-col gap-1.5 laptop:gap-3'>
        <h2 className='text-header-6 laptop:text-header-4'>غذاهای غیر ایرانی</h2>
        <CarouselSlider
          items={sliders}
          isButton
        />
        <div className='m-auto'>
          <Button
            variant='outlined'
            text='مشاهده منوی کامل'
            startIcon={<SpringNotes className='w-3 h-3' />}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
