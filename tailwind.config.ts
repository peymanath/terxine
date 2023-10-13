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
  'header-1': [
    '44px',
    {
      letterSpacing: '0',
      fontWeight: '700', // Bold
    },
  ],
  'header-2': [
    '40px',
    {
      letterSpacing: '0',
      fontWeight: '700', // Bold
    },
  ],
  'header-3': [
    '32px',
    {
      letterSpacing: '0',
      fontWeight: '700', // Bold
    },
  ],
  'header-4': [
    '24px',
    {
      letterSpacing: '0',
      fontWeight: '700', // Bold
    },
  ],
  'header-5': [
    '20px',
    {
      letterSpacing: '0',
      fontWeight: '700', // Bold
    },
  ],
  'header-6': [
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

// Customize Spacing
const spacingTailwind: ResolvableTo<KeyValuePair> = {
  px: '1px',
  '0.25': '2px',
  '0.5': '4px',
  1: '8px',
  2: '16px',
  3: '24px',
  4: '32px',
  5: '40px',
  6: '48px',
  7: '56px',
  8: '64px',
  9: '72px',
  10: '80px',
  11: '88px',
  12: '96px',
  13: '104px',
  14: '112px',
  15: '120px',
  16: '128px',
  17: '136px',
  18: '144px',
  19: '152px',
  20: '160px',
};

// Customize BorderRadius
const borderRadiusCustomize: ResolvableTo<KeyValuePair> = {
  none: '0',
  DEFAULT: '4px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '64px',
};
// Customize BorderRadius
const boxShadowCustomize: ResolvableTo<KeyValuePair> = {
  '2': '0px 2px 2px 0px rgba(0, 0, 0, 0.25)',
  '4': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  '6': '0px 6px 6px 0px rgba(0, 0, 0, 0.25)',
  '8': '0px 8px 8px 0px rgba(0, 0, 0, 0.25)',
  '12': '0px 12px 12px 0px rgba(0, 0, 0, 0.25)',
  '16': '0px 16px 16px 0px rgba(0, 0, 0, 0.25)',
  card: '0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.09), 0px 9px 5px 0px rgba(0, 0, 0, 0.05), 0px 16px 6px 0px rgba(0, 0, 0, 0.01), 0px 25px 7px 0px rgba(0, 0, 0, 0.00)',
  'contact-card':
    '0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 3px 6px 0px rgba(0, 0, 0, 0.10), 0px 11px 11px 0px rgba(0, 0, 0, 0.09), 0px 24px 14px 0px rgba(0, 0, 0, 0.05), 0px 42px 17px 0px rgba(0, 0, 0, 0.01), 0px 66px 18px 0px rgba(0, 0, 0, 0.00)',
};

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: colorTailwind,
    fontSize: fontTailwind,
    spacing: spacingTailwind,
    borderRadius: borderRadiusCustomize,
    boxShadow: boxShadowCustomize,
    extend: {},
  },
  plugins: [],
};
export default config;
