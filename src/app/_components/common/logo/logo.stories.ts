import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './logo';

const meta: Meta<typeof Logo> = {
  title: 'Common/Atoms/Logo',
  component: Logo,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const LogoComponent: Story = {
  args: {
    size: 'large',
    color: 'primary',
    type: 'both',
  },
};
