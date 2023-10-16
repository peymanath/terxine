import React from 'react';
import type { ButtonProps, ButtonShape } from '@/app/_components/common/button/button.types';
import classNames from 'classnames';
import type { Size } from '@/app/_components/common/types';

// Generate ClassName for button size
const buttonSize: Record<Size, string> = {
  default: '',
  small: 'btn-sm',
  medium: 'btn-md',
  large: 'btn-lg',
};

const shapeClasses: Record<ButtonShape, string> = {
  wide: 'btn-wide',
  full: 'btn-block',
  square: 'btn-square',
  default: '',
};
export const Button: React.FC<ButtonProps> = props => {
  // Destructure Props
  const {
    text,
    icon,
    endIcon,
    startIcon,
    loadingText,
    className,
    onClick,
    variant = 'contained',
    color = 'default',
    size = 'default',
    type = 'button',
    shape = 'default',
    isLoading = false,
    isDisables = false,
    ...rest
  }: ButtonProps = props;

  const classes = classNames(
    'btn',
    className,
    { [`btn-loading`]: isLoading },
    { [`btn-disabled`]: isDisables },
    { [`btn-${color}`]: color },
    { [`btn-${variant}`]: variant },
    { [buttonSize[size]]: size },
    { [shapeClasses[shape]]: shape }
  );

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={isDisables}
      {...rest}>
      {!!startIcon && startIcon}
      {isLoading ? loadingText : shape === 'square' ? icon : text}
      {!!endIcon && endIcon}
    </button>
  );
};
