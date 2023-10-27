import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './header';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [
    (Story): React.ReactElement<unknown> => {
      document.documentElement.dir = 'rtl';
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const HeaderComponent: Story = {
  render() {
    return <Header />;
  },
};
