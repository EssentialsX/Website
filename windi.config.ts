// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'windicss/helpers'
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
