import type { Size } from '@/app/_components/types';
import type { Color } from '@/app/_components/types/color.type';

export type ComponentBase = {
  size?: Size;
  color: Color;
  isDisables?: boolean;
  className?: string;
};
