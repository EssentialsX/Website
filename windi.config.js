const defaultTheme = require('windicss/defaultTheme')

// https://github.com/tailwindlabs/tailwindcss-typography/blob/5dd220b1d3e0079dcc132e4c20d1755de373bb95/src/styles.js#L4-L10
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const em = (px, base) => `${round(px / base)}em`

module.exports = {
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
      typography: (_theme) => ({
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
      }),
    },
  },
  variants: {
    extend: {
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [
    require('windicss/plugin/typography')({
      dark: true,
    }),
    require('windicss/plugin/forms'),
  ],
}
