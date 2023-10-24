import type { ComponentBase } from '@/app/_components/types';

/**
 * Logo Colors Type
 */
export type LogoType = 'text' | 'icon' | 'both';

/**
 * Logo Colors Type
 */
export type LogoSize = 'small' | 'large';

/**
 * Logo Colors Type
 */
export type LogoColor = 'primary' | 'white' | 'gray-800';

/**
 * Logo Props Type
 */
export type LogoProps = Pick<ComponentBase, 'className'> & {
  type: LogoType;
  size: LogoSize;
  color?: LogoColor;
};
