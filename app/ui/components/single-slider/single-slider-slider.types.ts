import type React from 'react';

export type SingleSliderItems = {
  src: string;
  title?: string;
  textButton?: string;
};
export type SingleSliderProps = {
  isPagination?: boolean;
  isBackdrop?: boolean;
  sliderItems: SingleSliderItems[];
};
export type PropType = React.PropsWithChildren<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

export type DotButtonsProps = {
  snaps: number[];
  selectedIndex: number;
  scrollTo: (_numberSlider: number) => void;
};

export type DotButtonProps = PropType & {
  isActive?: boolean;
};
