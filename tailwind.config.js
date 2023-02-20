const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      gray: colors.slate,
      primary: colors.indigo,
      secondary: colors.rose,
    },
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        'single-ping': 'single-ping 1s forwards cubic-bezier(0, 0, 0.2, 1)',
      },
      keyframes: {
        'single-ping': {
          '75%, 100%': {
            transform: 'scale(1.4)',
            opacity: '0',
          },
        },
      },
      boxShadow: {
        '3xl': '0 20px 90px rgb(0 0 0 / 0.4)',
        soft: '0 30px 30px -16px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocusv', ['&:hover', '&:focus-visible']);
      addVariant('group-hocusv', [
        ':merge(.group):hover &',
        ':merge(.group):focus-visible &',
      ]);
      addVariant('peer-hocusv', [
        ':merge(.peer):hover ~ &',
        ':merge(.peer):focus-visible ~ &',
      ]);
    }),
  ],
};
