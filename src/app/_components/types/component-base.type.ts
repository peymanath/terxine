import type { Size, Color } from '@/app/_components/types';

export type ComponentBase = {
  size?: Size;
  color: Color;
  isDisables?: boolean;
  className?: string;
};
