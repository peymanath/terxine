import type { Config } from 'tailwindcss';
import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';
import type { RecursiveKeyValuePair, ResolvableTo } from 'tailwindcss/types/config';
import type { KeyValuePair } from 'tailwindcss/types/config';

type CustomFontType = ResolvableTo<
  KeyValuePair<
    string,
    | string
    | [fontSize: string, lineHeight: string]
    | [
        fontSize: string,
        configuration: Partial<{
          lineHeight: string;
          letterSpacing: string;
          fontWeight: string | number;
        }>,
      ]
  >
>;

// apply plugin to colorD package
extend([mixPlugin]);

// Darken color generator
const generateDarkenColorFrom = (input: string, percentage = 0.07): string =>
  colord(input).darken(percentage).toHex();

// Fore Ground color generator
const generateForegroundColorFrom = (input: string, percentage = 0.8): string =>
  colord(input)
    .mix(colord(input).isDark() ? 'white' : 'black', percentage)
    .toHex();

// Customize Colors
const colorTailwind: ResolvableTo<RecursiveKeyValuePair> = {
  // Neutral Color
  white: '#FFF',
  block: '#0C0C0C',

  // Primary Color
  primary: '#417F56',
  'primary-content': generateForegroundColorFrom('#417F56'),
  'primary-focus': generateDarkenColorFrom('#417F56'),

  // Error Color
  error: '#C30000',
  'error-light': '#ED2E2E',
  'error-exLight': '#FFF2F2',
  'error-content': generateForegroundColorFrom('#C30000'),
  'error-focus': generateDarkenColorFrom('#C30000'),

  // Success Color
  success: '#00966D',
  'success-light': '#00BA88',
  'success-exLight': '#F3FDFA',
  'success-content': generateForegroundColorFrom('#00966D'),
  'success-focus': generateDarkenColorFrom('#00966D'),

  // Warning Color
  warning: '#A9791C',
  'warning-light': '#F4B740',
  'warning-exLight': '#FFF8E1',
  'warning-content': generateForegroundColorFrom('#A9791C'),
  'warning-focus': generateDarkenColorFrom('#A9791C'),

  // Gray Color
  gray: {
    100: '#F9F9F9',
    200: '#F9F9F9',
    300: '#EDEDED',
    400: '#CBCBCB',
    500: '#ADADAD',
    600: '#757575',
    700: '#717171',
    800: '#353535',
  },

  // Tint Color
  tint: {
    50: '#E5F2E9',
    100: '#CAE4D3',
    200: '#B0D7BD',
    300: '#96C9A7',
    400: '#7CBC91',
    500: '#61AE7B',
    600: '#4E9968',
    700: '#396F4B',
    800: '#294F36',
    900: '#183020',
    950: '#08100B',
  },
};

// Customize Fonts
const fontTailwind: CustomFontType = {
  // Display Fonts
  'display-1': [
    '64px',
    {
      letterSpacing: '0',
      fontWeight: '700', // Bold
    },
  ],
  'display-2': [
    '56px',
    {
      letterSpacing: '0',
      fontWeight: '700', // Bold
    },
  ],

  // Header Fonts
  h1: [
    '44px',
    {
      letterSpacing: '0',
      fontWeight: '700', // Bold
    },
  ],
  h2: [
    '40px',
    {
      letterSpacing: '0',
      fontWeight: '700', // Bold
    },
  ],
  h3: [
    '32px',
    {
      letterSpacing: '0',
      fontWeight: '700', // Bold
    },
  ],
  h4: [
    '24px',
    {
      letterSpacing: '0',
      fontWeight: '700', // Bold
    },
  ],
  h5: [
    '20px',
    {
      letterSpacing: '0',
      fontWeight: '700', // Bold
    },
  ],
  h6: [
    '16px',
    {
      letterSpacing: '0',
      fontWeight: '700', // Bold
    },
  ],
  h7: [
    '20px',
    {
      letterSpacing: '0',
      fontWeight: '600', // semiBold
    },
  ],

  // Body Font
  'body-sm': [
    '20px',
    {
      letterSpacing: '0',
      fontWeight: '400', // Regular
    },
  ],
  'body-md': [
    '18px',
    {
      letterSpacing: '0',
      fontWeight: '400', // Regular
    },
  ],
  'body-lg': [
    '16px',
    {
      letterSpacing: '0',
      fontWeight: '400', // Regular
    },
  ],
  'body-xl': [
    '14px',
    {
      letterSpacing: '0',
      fontWeight: '400', // Regular
    },
  ],

  // Caption Font
  'caption-sm': [
    '10px',
    {
      letterSpacing: '0',
      fontWeight: '500', // Medium
    },
  ],
  'caption-md': [
    '12px',
    {
      letterSpacing: '0',
      fontWeight: '500', // Medium
    },
  ],
  'caption-lg': [
    '14px',
    {
      letterSpacing: '0',
      fontWeight: '500', // Medium
    },
  ],

  // Button Font
  'button-sm': [
    '14px',
    {
      lineHeight: '24px',
      letterSpacing: '0',
      fontWeight: '500', // Medium
    },
  ],
  'button-lg': [
    '16px',
    {
      letterSpacing: '0',
      fontWeight: '500', // Medium
    },
  ],

  // Overline Font
  'overline-sm': [
    '12px',
    {
      lineHeight: 'auto',
      letterSpacing: '0.8px',
      fontWeight: '700', // Bold
    },
  ],
  'overline-lg': [
    '16px',
    {
      letterSpacing: '0',
      fontWeight: '400', // Regular
    },
  ],
};

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: colorTailwind,
    fontSize: fontTailwind,
    extend: {},
  },
  plugins: [],
};
export default config;
