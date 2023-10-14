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
    text: 'Button',
    loadingText: 'Loading ...',
    size: 'default',
    variant: undefined,
    isLoading: false,
    isDisables: false,
  },
};
