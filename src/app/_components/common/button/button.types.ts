import type React from 'react';
import type { ComponentBase } from '@/app/_components/types/component-base.type';
import type { LoadingBehavior } from '@/app/_components/types/loading-behavior.type';

/**
 * Button Variant Type
 */
export type ButtonVariant = 'contained' | 'outlined';

/**
 * Button Props Type
 */
export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> &
  ComponentBase &
  LoadingBehavior & {
    text: string;
    variant: ButtonVariant;
    endIcon?: React.ReactNode;
    startIcon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };
