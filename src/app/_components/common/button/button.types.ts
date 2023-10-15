import type React from 'react';
import type { ComponentBase } from '@/app/_components/types/component-base.type';
import type { LoadingBehavior } from '@/app/_components/types/loading-behavior.type';

/**
 * Button Shape Type
 */
export type ButtonShape = 'default' | 'wide' | 'full' | 'square';

/**
 * Button Color Type
 */
export type ButtonColor =
  | 'default'
  | 'tint-50'
  | 'tint-100'
  | 'tint-150'
  | 'tint-600'
  | 'tint-650'
  | 'gray-700'
  | 'gray-800'
  | 'error'
  | 'warning'
  | 'success'
  | 'black';

/**
 * Button Variant Type
 */
export type ButtonVariant = 'link' | 'contained' | 'outlined';

/**
 * Button Props Type
 */
export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> &
  ComponentBase &
  LoadingBehavior & {
    color: ButtonColor;
    shape: ButtonShape;
    text: string;
    icon: React.ReactNode;
    variant: ButtonVariant;
    endIcon?: React.ReactNode;
    startIcon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };
