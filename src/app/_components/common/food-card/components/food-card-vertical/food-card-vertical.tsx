import React from 'react';
import type { FoodCardVerticalProps } from '@/app/_components/common/food-card/components/food-card-vertical/food-card-vertical.type';
import { Button } from '@/app/_components/common/button';
import { FoodCardSize } from '@/app/_components/common/food-card/food-card.types';
import { Heart as HeartSolid, Star } from 'react-huge-icons/solid';
import { Heart as HeartOutline } from 'react-huge-icons/outline';

export const FoodCardVertical: React.FC<FoodCardVerticalProps> = props => {
  // Destructure Props
  const {
    id,
    title,
    size,
    isWishList,
    basePrice,
    discountPerssentage,
    discountTotal,
    rate,
  }: FoodCardVerticalProps = props;

  const Heart = isWishList ? HeartSolid : HeartOutline;

  return (
    <div className='food-card-vertical-content'>
      <div className='food-card-vertical-meta'>
        <h3 className='title'>{title}</h3>
        <div className='meta'>
          <div>
            <div className='flex gap-0.5 items-center'>
              <Heart className={`heart w-2 h-2 ${isWishList ? 'heart-is-wishlist' : ''}`} />
              {size === FoodCardSize.Large && (
                <p className='text-gray-500 text-caption-sm'>افزودن به علاقمندی‌ها</p>
              )}
            </div>
            <div className='flex gap-0.5 items-center'>
              <Star className='star w-2 h-2 text-warning-light' />
              <p className='text-gray-800 text-caption-sm'>۵</p>
              {size === FoodCardSize.Large && (
                <p className='text-gray-500 text-caption-sm'>(۶۲ امتیاز)</p>
              )}
            </div>
          </div>
          <div>
            <div>
              <Heart className={`heart ${isWishList ? 'heart-is-wishlist' : ''}`} />
            </div>
          </div>
        </div>
      </div>
      <Button
        id={String(id)}
        size={size === FoodCardSize.Small ? 'small' : 'default'}
        customFont={size === FoodCardSize.Small ? 'text-caption-sm' : undefined}
        shape='full'
        text='افزودن به سبد خرید'
      />
    </div>
  );
};
