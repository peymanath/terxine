import React from 'react';
import type { ButtonProps, ButtonShape, Size } from '@/app/_components'; // Generate ClassName for button size
import classNames from 'classnames';

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
    customFont = 'text-button-lg',
    variant = 'contained',
    color = 'default',
    size = 'default',
    type = 'button',
    shape = 'default',
    isScale = true,
    isLoading = false,
    isDisables = false,
    ...rest
  }: ButtonProps = props;

  const classes = classNames(
    'btn',
    className,
    customFont,
    { [`btn-loading`]: isLoading },
    { [`btn-disabled`]: isDisables },
    { [`btn-scaled`]: isScale },
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
