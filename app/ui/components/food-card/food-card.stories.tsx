import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { FoodCard } from './food-card';
import db_image from '@/database/image-base64.json';

const meta: Meta<typeof FoodCard> = {
  title: 'Components/Food Card',
  component: FoodCard,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn): JSX.Element => {
      document.documentElement.dir = 'rtl';
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof FoodCard>;

export const FoodCardComponent: Story = {
  args: {
    id: 1,
    variant: 'vertical',
    title: 'دلمه برگ کلم',
    rate: 4.9,
    totalRating: 62,
    imageUrl: db_image.food_1,
    basePrice: 150_000,
    discountTotal: 175_000,
    discountPerssentage: 20,
  },
};
