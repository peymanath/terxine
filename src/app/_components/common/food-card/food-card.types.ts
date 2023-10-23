export enum FoodCardSize {
  Small = 'Small',
  Large = 'Large',
}

export type FoodCardProps = {
  id: number;
  image: 'empty' | string;
  title: string;
  basePrice: number;
  discountPerssentage?: number;
  discountTotal?: number;
  size?: FoodCardSize;
  isLoading?: boolean;
  isWishList?: boolean;
  rate: number;
} & (FoodCardHorizontalProps | FoodCardVerticalProps);
export type FoodCardHorizontalProps = {
  variant?: 'horizontal';
  /**
   * # Description
   * The description is used when the value of `variant` is equal to horizontal.
   */
  description?: string;
};
export type FoodCardVerticalProps = {
  variant?: 'vertical';
  /**
   * # Total Rating
   * The Total Rating is used when the value of `variant` is equal to vertical.
   */
  totalRating: number;
};
