const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.blueGray,
      plum: {
        '50':  '#f9fafb',
        '100': '#f5f6f8',
        '200': '#e7e6f1',
        '300': '#d7cee8',
        '400': '#bea3d8',
        '500': '#9c77c3',
        '600': '#7452a2',
        '700': '#533f7c',
        '800': '#3c3159',
        '900': '#2e2745',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
