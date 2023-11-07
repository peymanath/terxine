import type { Preview } from '@storybook/react';
import '../app/ui/globals.css';
import '../app/ui/styles/storybook/custom-font.css';

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
