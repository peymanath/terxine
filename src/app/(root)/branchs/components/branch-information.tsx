import React from 'react';
import { SingleSlider, type SingleSliderItems } from '@/app/_components';
import { Calling, ClockCircle, Location } from 'react-huge-icons/outline';

const sliderItems: SingleSliderItems[] = [
  {
    src: '/images/sliders/food-1.webp',
  },
  {
    src: '/images/sliders/neshiman-1.webp',
  },
  {
    src: '/images/sliders/food-2.webp',
  },
];

export const BranchInformation: React.FC = () => {
  return (
    <div className='flex flex-col gap-1.5 laptop:gap-3'>
      <h2 className='container text-header-6 laptop:text-header-4 text-center'>شعبه اکباتان</h2>
      <div className='relative mb-6'>
        <SingleSlider sliderItems={sliderItems} />
        <div className='absolute p-1 laptop:p-2 right-1/2 translate-x-1/2 translate-y-1/2 bottom-0 bg-white border laptop:border-3 border-primary rounded laptop:rounded-sm w-full max-w-[320px] laptop:max-w-[810px] max-h-[130px] overflow-auto'>
          <div className='flex flex-col gap-1'>
            <div className='w-full flex-1 flex laptop:hidden gap-1 items-center'>
              <Location className='text-tint-700 w-2 h-2 laptop:w-4 laptop:h-4' />
              <div className='flex flex-col'>
                <p className='text-caption-sm laptop:text-body-md text-gray-800 text-center'>
                  شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
                </p>
              </div>
            </div>
            <div className='flex items-start justify-between laptop:justify-evenly gap-5'>
              <div className='flex laptop:flex-col gap-1 items-center max-w-[210px]'>
                <Calling className='text-tint-700 w-2 h-2 laptop:w-4 laptop:h-4' />
                <div className='flex flex-col'>
                  <p className='text-caption-sm laptop:text-body-md text-gray-800 text-center'>
                    ۰۲۱-۳۳۵۳۵۳۵۴
                  </p>
                  <p className='hidden laptop:flex text-caption-sm laptop:text-body-md text-gray-800 text-center'>
                    ۰۲۱-۳۳۵۳۵۳۵۴
                  </p>
                </div>
              </div>
              <div className='hidden laptop:flex laptop:flex-col gap-1 items-center max-w-[210px]'>
                <Location className='text-tint-700 w-2 h-2 laptop:w-4 laptop:h-4' />
                <div className='flex flex-col'>
                  <p className='text-caption-sm laptop:text-body-md text-gray-800 text-center'>
                    شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
                  </p>
                </div>
              </div>
              <div className='flex laptop:flex-col gap-1 items-center max-w-[210px]'>
                <ClockCircle className='text-tint-700 w-2 h-2 laptop:w-4 laptop:h-4' />
                <div className='flex flex-col'>
                  <p className='text-caption-sm laptop:text-body-md text-gray-800 text-center'>
                    همه‌روزه از ساعت ۱۲ الی ۲۳
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
