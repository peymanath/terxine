import type { FoodCardProps } from '@/app/ui/components';

export type FoodCardVerticalProps = Omit<FoodCardProps, 'imageUrl' | 'isLoading'>;
