import React from 'react';
import {
  type FoodCardProps,
  FoodCardSize,
} from '@/app/_components/common/food-card/food-card.types';
import classNames from 'classnames';
import Image from 'next/image';
import { FoodCardVertical } from '@/app/_components/common/food-card/components/food-card-vertical'; // Generate ClassName for button size

// Generate ClassName for button size
const cardSize: Record<FoodCardSize, string> = {
  [FoodCardSize.Small]: 'food-card-sm',
  [FoodCardSize.Large]: 'food-card-lg',
};

export const FoodCard: React.FC<FoodCardProps> = props => {
  // Destructure Props
  const {
    variant = 'vertical',
    size = FoodCardSize.Small,
    isLoading = false,
    imageUrl,
    ...reset
  }: FoodCardProps = props;

  const classes = classNames(
    'food-card',
    { [`food-card-${variant}`]: variant },
    { [`food-card-loading`]: isLoading },
    { [cardSize[size]]: size }
  );

  return (
    <div className={classes}>
      {!!imageUrl && (
        <Image
          className='food-card-image'
          width={288}
          height={240}
          src={imageUrl}
          alt={reset.title}></Image>
      )}
      {variant === 'vertical' ? (
        <FoodCardVertical
          size={size}
          {...reset}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
