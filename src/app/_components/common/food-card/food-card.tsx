import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { type FoodCardProps, FoodCardSize, FoodCardVertical } from '@/app/_components'; // Generate ClassName for button size

// Generate ClassName for button size
const cardSize: Record<FoodCardSize, string> = {
  [FoodCardSize.Small]: 'food-card-sm',
  [FoodCardSize.Large]: 'food-card-lg',
};

export const FoodCard: React.FC<FoodCardProps> = props => {
  // Destructure Props
  const { size = FoodCardSize.Small, isLoading = false, imageUrl, ...reset }: FoodCardProps = props;

  const classes = classNames(
    'food-card',
    { [`food-card-${reset.variant}`]: reset.variant },
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
      {reset.variant === 'vertical' ? (
        <FoodCardVertical
          {...reset}
          imageUrl={imageUrl}
          size={size}
          variant='vertical'
          totalRating={reset?.totalRating}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
