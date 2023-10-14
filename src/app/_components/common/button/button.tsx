import React from 'react';
import type { ButtonProps } from '@/app/_components/common/button/button.types';
import classNames from 'classnames';
import type { Size } from '@/app/_components/types';

// Generate ClassName for button size
const buttonSize: Record<Size, string> = {
  default: '',
  small: 'btn-sm',
  medium: 'btn-md',
  large: 'btn-lg',
};

export const Button: React.FC<ButtonProps> = props => {
  // Destructure Props
  const {
    text,
    variant,
    endIcon,
    startIcon,
    loadingText,
    className,
    onClick,
    color = 'default',
    size = 'default',
    type = 'button',
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
    { [buttonSize[size]]: size }
  );

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={isDisables}
      {...rest}>
      {!!startIcon && startIcon}
      {isLoading ? loadingText : text}
      {!!endIcon && endIcon}
    </button>
  );
};
