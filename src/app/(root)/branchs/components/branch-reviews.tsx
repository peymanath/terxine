'use client';
import React from 'react';
import { Slider } from '@/app/_components';
import { Star } from 'react-huge-icons/solid';
import { toPersianNumber } from '@/utils/toPersianNumber';
import Image from 'next/image';

type SliderReviewsItem = {
  avatar: string;
  name: string;
  description: string;
  date: string;
  rate: number;
};

const relatedSliderItem: SliderReviewsItem[] = [
  {
    name: 'دلم کلم برگ',
    avatar: '/images/foods/dolme-barg-kalam.webp',
    description:
      'از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ',
    date: '۲۳ اسفند ۱۴۰۱',
    rate: 4,
  },
  {
    name: 'بادمجون شکم پر',
    avatar: '/images/foods/bademjan-shekam-por.webp',
    description:
      'از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ',
    date: '۲۳ اسفند ۱۴۰۱',
    rate: 4,
  },
  {
    name: 'کالزونه اسفناج',
    avatar: '/images/foods/spinach-calzone.webp',
    description:
      'از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ',
    date: '۲۳ اسفند ۱۴۰۱',
    rate: 4,
  },
];
export const BranchReviewsItem: React.FC<SliderReviewsItem> = props => {
  // Destructure Props
  const { avatar, name, rate, date, description } = props;

  return (
    <div className='flex items-center justify-between gap-1.5 laptop:gap-3 border border-gray-400 rounded laptop:rounded-sm py-2.5 px-2 laptop:py-3 laptop:px-4'>
      <div className='w-full flex flex-col gap-1 items-center justify-between max-w-[96px]'>
        <Image
          width={96}
          height={96}
          src={avatar}
          alt={name}
          className='rounded-full grayscale w-7 h-7 laptop:w-12 laptop:h-12 object-cover'
        />
        <div className='flex flex-col gap-1 text-caption-sm laptop:text-body-sm'>
          <p className='text-center'>{name}</p>
          <p className='text-center'>{date}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-caption-sm laptop:text-body-md'>{description}</p>
        <div className='flex gap-0.5 items-center justify-end'>
          <Star className='w-1.5 h-1.5 laptop:w-2 laptop:h-2 text-warning-light' />
          <p className='text-gray-800 text-caption-md laptop:text-button-lg'>
            {toPersianNumber(rate)}
          </p>
        </div>
      </div>
    </div>
  );
};

export const BranchReviews: React.FC = () => {
  // Generate Slider
  const sliders = relatedSliderItem.map((item, index) => (
    <BranchReviewsItem
      key={index}
      {...item}
    />
  ));
  return (
    <div className='flex flex-col gap-1.5 laptop:gap-3'>
      <h2 className='container text-header-6 laptop:text-header-4 text-center'>نظرات کاربران</h2>
      <div className='container '>
        <Slider
          items={sliders}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
          }}
        />
      </div>
    </div>
  );
};
