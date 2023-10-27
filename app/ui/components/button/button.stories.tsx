import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Common/Atoms/Button',
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
    loadingText: 'Loading...',
    isLoading: false,
    isDisables: false,
    size: 'default',
    shape: 'default',
    icon: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z'
          fill='currentColor'
        />
        <path
          d='M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z'
          fill='currentColor'
        />
        <path
          d='M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z'
          fill='currentColor'
        />
        <path
          d='M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z'
          fill='currentColor'
        />
      </svg>
    ),
  },
};

export const ButtonColor: Story = {
  render() {
    return (
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <Button
          text='سفارش غذا'
          color='tint-50'
          size='default'
        />
        <Button
          text='سفارش غذا'
          color='tint-100'
          size='default'
        />
        <Button
          text='سفارش غذا'
          color='tint-150'
          size='default'
        />
        <Button
          text='سفارش غذا'
          color='tint-600'
          size='default'
        />
        <Button
          text='سفارش غذا'
          color='tint-650'
          size='default'
        />
        <Button
          text='سفارش غذا'
          color='success'
          size='default'
        />
        <Button
          text='سفارش غذا'
          color='warning'
          size='default'
        />
        <Button
          text='سفارش غذا'
          color='error'
          size='default'
        />
        <Button
          text='سفارش غذا'
          color='gray-700'
          size='default'
        />
        <Button
          text='سفارش غذا'
          color='gray-800'
          size='default'
        />
        <Button
          text='سفارش غذا'
          color='black'
          size='default'
        />
      </div>
    );
  },
};
export const ButtonSize: Story = {
  render() {
    return (
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <Button
          text='سفارش غذا'
          color='default'
          size='small'
        />
        <Button
          text='سفارش غذا'
          color='default'
          size='default'
        />
        <Button
          text='سفارش غذا'
          color='default'
          size='medium'
        />
        <Button
          text='سفارش غذا'
          color='default'
          size='large'
        />
      </div>
    );
  },
};

export const ButtonVarinat: Story = {
  render() {
    return (
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <Button
          text='سفارش غذا'
          variant='link'
        />
        <Button
          text='سفارش غذا'
          variant='contained' // Default
        />
        <Button
          text='سفارش غذا'
          variant='outlined'
        />
      </div>
    );
  },
};

export const ButtonShape: Story = {
  render() {
    return (
      <div className='flex flex-col items-center justify-center gap-2 w-full'>
        <Button
          text='سفارش غذا'
          shape='default'
        />
        <Button
          text='سفارش غذا'
          shape='wide'
        />
        <Button
          text='سفارش غذا'
          shape='full'
        />
        <Button
          text='سفارش غذا'
          shape='square'
          icon={
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z'
                fill='currentColor'
              />
              <path
                d='M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z'
                fill='currentColor'
              />
              <path
                d='M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z'
                fill='currentColor'
              />
              <path
                d='M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z'
                fill='currentColor'
              />
            </svg>
          }
        />
      </div>
    );
  },
};