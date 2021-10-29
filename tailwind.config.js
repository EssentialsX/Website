const _ = require('lodash')
const defaultTheme = require('tailwindcss/defaultTheme')

// https://github.com/tailwindlabs/tailwindcss-typography/blob/5dd220b1d3e0079dcc132e4c20d1755de373bb95/src/styles.js#L4-L10
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#E93B38',
        },
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              p: {
                marginTop: em(12, 16),
                marginBottom: em(12, 16),
              },
              li: {
                marginTop: em(4, 16),
                marginBottom: em(4, 16),
              },
              h1: {
                marginTop: em(12, 36),
                marginBottom: em(24, 36),
              },
              h2: {
                marginTop: em(24, 24),
                marginBottom: em(16, 24),
              },
              h3: {
                marginTop: em(20, 20),
                marginBottom: em(10, 20),
              },
              h4: {
                marginTop: em(16, 16),
                marginBottom: em(8, 16),
              },
              img: {
                marginTop: em(20, 16),
                marginBottom: em(20, 16),
              },
            },
          ],
        },
        // TODO remove once https://github.com/tailwindlabs/tailwindcss-typography/tree/new-customization-api merged
        invert: {
          css: [
            {
              color: theme('colors.gray.200'),
              '[class~="lead"]': {
                color: theme('colors.gray.200'),
              },
              a: {
                color: theme('colors.red.500'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.200'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.400'),
              },
              hr: {
                borderColor: theme('colors.gray.200'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.400'),
              },
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              h3: {
                color: theme('colors.white'),
              },
              h4: {
                color: theme('colors.white'),
              },
              'figure figcaption': {
                color: theme('colors.gray.300'),
              },
              code: {
                color: theme('colors.red.600'),
              },
              'a code': {
                color: theme('colors.white'),
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['responsive', 'dark'],
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
