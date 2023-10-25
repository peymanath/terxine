import type { Meta, StoryObj } from '@storybook/react';

import db_image from '@/database/image-base64.json';
import { HeroSectionSlider } from '@/app/_components';

const meta: Meta<typeof HeroSectionSlider> = {
  title: 'Components/Landing/HeroSectionSlider',
  component: HeroSectionSlider,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HeroSectionSlider>;

export const HeroSectionSliderComponent: Story = {
  args: {
    sliderItems: [
      {
        title: 'یک ماجراجویی آشپزی برای تمام حواس',
        src: db_image.slider_image,
        textButton: 'سفارش آنلاین غذا',
      },
      {
        title: 'یک ماجراجویی آشپزی برای تمام حواس',
        src: db_image.slider_image,
        textButton: 'سفارش آنلاین غذا',
      },
      {
        title: 'یک ماجراجویی آشپزی برای تمام حواس',
        src: db_image.slider_image,
        textButton: 'سفارش آنلاین غذا',
      },
      {
        title: 'یک ماجراجویی آشپزی برای تمام حواس',
        src: db_image.slider_image,
        textButton: 'سفارش آنلاین غذا',
      },
    ],
  },
};
