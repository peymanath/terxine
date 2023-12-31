'use client';
import React, { useRef } from 'react';
import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowThickLeft, ArrowThickRight } from 'react-huge-icons/outline';
import { Button, type CarouselSliderProps } from '@/app/ui/components';

// Import Css Class for Swiper Library
import 'swiper/css';
import 'swiper/css/navigation';

export const CarouselSlider: React.FC<CarouselSliderProps> = props => {
  // Destructure Props
  const { isButton, items, ref, breakpoints, spaceBetween, slidesPerView }: CarouselSliderProps =
    props;

  // Config default Reference
  const swiperRef = useRef<SwiperRef>(null);

  // Default Config
  const defaultBreakPoints: typeof breakpoints = {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 16,
    },
    992: {
      slidesPerView: 4.5,
      spaceBetween: 16,
    },
  };
  const refConfig = ref || swiperRef;
  return (
    <div className='relative'>
      <Swiper
        modules={[Navigation]}
        spaceBetween={spaceBetween || 16}
        slidesPerView={slidesPerView || 2}
        breakpoints={breakpoints || defaultBreakPoints}
        ref={refConfig}
        style={{
          width: '100%',
        }}>
        {!!items &&
          items.map((itemComponent, index) => (
            <SwiperSlide key={index}>{itemComponent}</SwiperSlide>
          ))}
      </Swiper>
      {isButton && (
        <React.Fragment>
          <Button
            onClick={(): void => {
              refConfig?.current?.swiper.slideNext();
            }}
            color='tint-50'
            shape='square'
            isScale={false}
            className='absolute top-1/2 -translate-y-1/2 -left-2 z-10'
            icon={<ArrowThickLeft className='w-2 h-2' />}
          />
          <Button
            onClick={(): void => {
              refConfig?.current?.swiper.slidePrev();
            }}
            color='tint-50'
            shape='square'
            isScale={false}
            className='absolute top-1/2 -translate-y-1/2 -right-2 z-10'
            icon={<ArrowThickRight className='w-2 h-2' />}
          />
        </React.Fragment>
      )}
    </div>
  );
};
