import type React from 'react';

export type HeroSectionSliderItems = {
  src: string;
  title?: string;
  textButton?: string;
};
export type HeroSectionSliderProps = {
  sliderItems: HeroSectionSliderItems[];
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
