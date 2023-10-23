import React from 'react';
import {
  type FoodCardProps,
  FoodCardSize,
} from '@/app/_components/common/food-card/food-card.types';
import classNames from 'classnames';

// Generate ClassName for button size
const cardSize: Record<FoodCardSize, string> = {
  [FoodCardSize.Small]: 'btn-sm',
  [FoodCardSize.Large]: 'btn-lg',
};

export const FoodCard: React.FC<FoodCardProps> = props => {
  // Destructure Props
  const {
    id,
    title,
    variant = 'vertical',
    size = FoodCardSize.Small,
    isLoading = false,
    isWishList = false,
    image = 'empty',
    basePrice,
    discountPerssentage,
    discountTotal,
    rate,
  }: FoodCardProps = props;

  const classes = classNames(
    'food-card',
    { [`food-card-${variant}`]: variant },
    { [`food-card-loading`]: isLoading },
    { [`food-card-wishlist`]: isWishList },
    { [cardSize[size]]: size }
  );

  return (
    <div className={classes}>
      {id}
      {title}
      {image}
      {basePrice}
      {discountPerssentage}
      {discountTotal}
      {rate}
    </div>
  );
};
