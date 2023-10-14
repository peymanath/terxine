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
    color = 'primary',
    variant = undefined,
    size = 'default',
    endIcon,
    startIcon,
    type,
    loadingText,
    isLoading = false,
    isDisables = false,
    className,
    onClick,
    ...rest
  } = props;

  const classes = classNames(
    'btn',
    className,
    { [`btn-loading`]: isLoading },
    { [`btn-disabled`]: isDisables },
    { [`btn-${variant}`]: variant },
    { [`btn-${color}`]: color },
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
