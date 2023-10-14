import type { Color, Size } from '@/app/_components/types';

export type ComponentBase = {
  color?: Color | undefined;
  size?: Size | undefined;
  isDisables?: boolean | undefined;
  className?: string | undefined;
};
