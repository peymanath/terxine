import type { FoodCardProps } from '@/app/_components';

export type FoodCardVerticalProps = Omit<FoodCardProps, 'imageUrl' | 'isLoading'>;
