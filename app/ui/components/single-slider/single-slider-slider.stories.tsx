import type { Meta, StoryObj } from '@storybook/react';
import db_image from '@BackEnd/database/image-base64.json';
import { SingleSlider } from '@/app/ui/components';

const meta: Meta<typeof SingleSlider> = {
  title: 'Components/Landing/SingleSlider',
  component: SingleSlider,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SingleSlider>;

export const SingleSliderComponent: Story = {
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
