import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonComponent: Story = {
  args: {
    color: undefined,
    variant: undefined,
    text: 'سفارش غذا',
    loadingText: 'Loading',
    isLoading: false,
    isDisables: false,
    size: 'default',
  },
};
