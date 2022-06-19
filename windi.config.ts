// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import defaultTheme from 'windicss/defaultTheme'
import typographyPlugin from 'windicss/plugin/typography'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
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
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          },
        },
        DARK: {
          css: {
            'ul > li::before': {
              backgroundColor: colors.gray[600],
            },
          },
        },
      },
    },
  },
  plugins: [
    typographyPlugin({
      dark: true,
    }),
    formsPlugin,
  ],
})
