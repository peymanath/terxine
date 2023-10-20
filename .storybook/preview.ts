import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import '../src/styles/storybook/custom-font.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // layout: 'centered',
  },
};

export default preview;
