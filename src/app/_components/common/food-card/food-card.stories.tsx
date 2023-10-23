import type { Meta, StoryObj } from '@storybook/react';
import { FoodCard } from './food-card';

const meta: Meta<typeof FoodCard> = {
  title: 'Components/FoodCard',
  component: FoodCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FoodCard>;

export const FoodCardComponent: Story = {
  args: {},
};
