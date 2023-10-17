import type { Config } from 'tailwindcss';
import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';
import type { RecursiveKeyValuePair, ResolvableTo } from 'tailwindcss/types/config';
import type { KeyValuePair } from 'tailwindcss/types/config';
import { ScreensConfig } from 'tailwindcss/types/config';

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
  current: 'currentColor',
  transparent: 'transparent',

  // Neutral Color
  white: '#FFF',
  black: '#0C0C0C',
  'black-content': generateForegroundColorFrom('#0C0C0C'),
  'black-focus': generateDarkenColorFrom('#0C0C0C'),

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
    '100-content': generateForegroundColorFrom('#F9F9F9'),
    '100-focus': generateDarkenColorFrom('#F9F9F9'),
    200: '#F9F9F9',
    '200-content': generateForegroundColorFrom('#F9F9F9'),
    '200-focus': generateDarkenColorFrom('#F9F9F9'),
    300: '#EDEDED',
    '300-content': generateForegroundColorFrom('#EDEDED'),
    '300-focus': generateDarkenColorFrom('#EDEDED'),
    400: '#CBCBCB',
    '400-content': generateForegroundColorFrom('#CBCBCB'),
    '400-focus': generateDarkenColorFrom('#CBCBCB'),
    500: '#ADADAD',
    '500-content': generateForegroundColorFrom('#ADADAD'),
    '500-focus': generateDarkenColorFrom('#ADADAD'),
    600: '#757575',
    '600-content': generateForegroundColorFrom('#757575'),
    '600-focus': generateDarkenColorFrom('#757575'),
    700: '#717171',
    '700-content': generateForegroundColorFrom('#717171'),
    '700-focus': generateDarkenColorFrom('#717171'),
    800: '#353535',
    '800-content': generateForegroundColorFrom('#353535'),
    '800-focus': generateDarkenColorFrom('#353535'),
  },

  // Tint Color
  tint: {
    50: '#E5F2E9',
    '50-content': generateForegroundColorFrom('#E5F2E9'),
    '50-focus': generateDarkenColorFrom('#E5F2E9'),
    100: '#CAE4D3',
    '100-content': generateForegroundColorFrom('#CAE4D3'),
    '100-focus': generateDarkenColorFrom('#CAE4D3'),
    150: '#B0D7BD',
    '150-content': generateForegroundColorFrom('#B0D7BD'),
    '150-focus': generateDarkenColorFrom('#B0D7BD'),
    200: '#96C9A7',
    '200-content': generateForegroundColorFrom('#96C9A7'),
    '200-focus': generateDarkenColorFrom('#96C9A7'),
    250: '#7CBC91',
    '250-content': generateForegroundColorFrom('#7CBC91'),
    '250-focus': generateDarkenColorFrom('#7CBC91'),
    300: '#61AE7B',
    '300-content': generateForegroundColorFrom('#61AE7B'),
    '300-focus': generateDarkenColorFrom('#61AE7B'),
    400: '#4E9968',
    '400-content': generateForegroundColorFrom('#4E9968'),
    '400-focus': generateDarkenColorFrom('#4E9968'),
    500: '#396F4B',
    '500-content': generateForegroundColorFrom('#396F4B'),
    '500-focus': generateDarkenColorFrom('#396F4B'),
    600: '#315F41',
    '600-content': generateForegroundColorFrom('#315F41'),
    '600-focus': generateDarkenColorFrom('#315F41'),
    650: '#294F36',
    '650-content': generateForegroundColorFrom('#294F36'),
    '650-focus': generateDarkenColorFrom('#294F36'),
    700: '#21402B',
    '700-content': generateForegroundColorFrom('#21402B'),
    '700-focus': generateDarkenColorFrom('#21402B'),
    800: '#183020',
    '800-content': generateForegroundColorFrom('#183020'),
    '800-focus': generateDarkenColorFrom('#183020'),
    900: '#102016',
    '900-content': generateForegroundColorFrom('#102016'),
    '900-focus': generateDarkenColorFrom('#102016'),
    950: '#08100B',
    '950-content': generateForegroundColorFrom('#08100B'),
    '950-focus': generateDarkenColorFrom('#08100B'),
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
  'header-7': [
    '20px',
    {
      letterSpacing: '0',
      fontWeight: '600', // semiBold
    },
  ],

  // Body Font
  'body-sm': [
    '14px',
    {
      letterSpacing: '0',
      fontWeight: '400', // Regular
    },
  ],
  'body-md': [
    '16px',
    {
      letterSpacing: '0',
      fontWeight: '400', // Regular
    },
  ],
  'body-lg': [
    '18px',
    {
      letterSpacing: '0',
      fontWeight: '400', // Regular
    },
  ],
  'body-xl': [
    '20px',
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
  0: '0',
  px: '1px',
  '0.25': '2px',
  '0.5': '4px',
  1: '8px',
  1.5: '12px',
  2: '16px',
  2.5: '20px',
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
// Customize BorderRadius
const screensCustomize: ScreensConfig = {
  mobile: '576px',
  // => @media (min-width: 640px) { ... }

  tablet: '768px',
  // => @media (min-width: 640px) { ... }

  laptop: '992px',
  // => @media (min-width: 1024px) { ... }

  desktop: '1224px',
  // => @media (min-width: 1280px) { ... }
};
const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        mobile: '2rem',
      },
      screens: screensCustomize,
    },
    screens: screensCustomize,
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
