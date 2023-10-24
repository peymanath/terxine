import type { FoodCardProps } from '@/app/_components/common/food-card/food-card.types';

export type FoodCardVerticalProps = Omit<FoodCardProps, 'imageUrl' | 'variant' | 'isLoading'>;
