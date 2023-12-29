const config = {
  extends: ['next/core-web-vitals', 'prettier', 'plugin:storybook/recommended'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'react-hooks/exhaustive-deps': 'off',
      },
    },
  ],
  plugins: ['unused-imports', '@typescript-eslint', 'prettier', 'react-hooks'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'none',
        argsIgnorePattern: '^_',
      },
    ],
  },
};

module.exports = config;
