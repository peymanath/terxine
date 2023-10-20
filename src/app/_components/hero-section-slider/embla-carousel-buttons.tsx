import React, { type PropsWithChildren } from 'react';
import { DirectionLeft, DirectionRight } from 'react-huge-icons/outline';

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

export const DotButton: React.FC<PropType> = props => {
  const { children, ...restProps } = props;

  return (
    <button
      type='button'
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
