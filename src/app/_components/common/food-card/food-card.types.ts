export enum FoodCardSize {
  Small = 'Small',
  Large = 'Large',
}

export type FoodCardProps = {
  id: number;
  rate: number;
  title: string;
  /**
   * # Example:
   *
   * **Url Image**
   *
   * `google.com/image-holder/flower.webp`
   *
   * **Public Folder NextJs or ReactJS**
   *
   * `/image-holder/flower.webp`
   *
   * **Base64 Url**
   *
   * `data:image-holder/webp;base64,UklGRrqJAgBXRUJQVlA4IK6JAg`
   */
  imageUrl?: undefined | string;
  basePrice: number;
  discountPerssentage?: undefined | number;
  discountTotal?: undefined | number;
  size?: undefined | FoodCardSize;
  isLoading?: undefined | boolean;
  isWishList?: undefined | boolean;
} & (FoodCardVerticalProps | FoodCardHorizontalProps);
export type FoodCardHorizontalProps = {
  variant: 'horizontal';
  /**
   * # Description
   * The description is used when the value of `variant` is equal to horizontal.
   */
  description?: string;
};
export type FoodCardVerticalProps = {
  variant: 'vertical';
  /**
   * # Total Rating
   * The Total Rating is used when the value of `variant` is equal to vertical.
   */
  totalRating: number;
};
