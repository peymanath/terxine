import React from 'react';
import { DirectionLeft, DirectionRight } from 'react-huge-icons/outline';
import type {
  DotButtonProps,
  PropType,
} from '@/app/_components/hero-section-slider/hero-section-slider.types';
import classNames from 'classnames';
import type { DotButtonsProps } from '@/app/_components/hero-section-slider/hero-section-slider.types';

export const DotButtons: React.FC<DotButtonsProps> = props => {
  const { snaps, selectedIndex, scrollTo } = props;
  return (
    <div className='embla__dots__container before:h-3 after:h-3 before:w-2.5 after:w-2.5  desktop:before:h-4 desktop:after:h-4 desktop:before:w-[27px] desktop:after:w-[27px]'>
      <div className='flex items-center justify-between gap-0.5 bg-white px-1 tablet:py-1'>
        {snaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={(): void => scrollTo(index)}
            isActive={index === selectedIndex}
          />
        ))}
      </div>
    </div>
  );
};

const DotButton: React.FC<DotButtonProps> = props => {
  const { children, isActive, ...restProps } = props;

  // Generate Classes
  const classes = classNames('embla__dot', { 'embla__dot--selected': isActive });

  return (
    <button
      type='button'
      className={classes}
      {...restProps}>
      {children}
    </button>
  );
};

export const PrevButton: React.FC<PropType> = props => {
  const { children, ...restProps } = props;

  return (
    <button
      className='absolute top-1/2 -translate-y-1/2 left-1 embla__button embla__button--prev'
      type='button'
      {...restProps}>
      <DirectionLeft className='embla__button__svg w-6 h-6 text-white' />
      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = props => {
  const { children, ...restProps } = props;

  return (
    <button
      className='absolute top-1/2 -translate-y-1/2 right-1 embla__button embla__button--next'
      type='button'
      {...restProps}>
      <DirectionRight className='embla__button__svg w-6 h-6 text-white' />
      {children}
    </button>
  );
};
