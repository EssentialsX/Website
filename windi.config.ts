// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import defaultTheme from 'windicss/defaultTheme'

import typographyPlugin from 'windicss/plugin/typography'
import formsPlugin from 'windicss/plugin/forms'
import heropatternsPlugin from '@windicss/plugin-heropatterns'

export default defineConfig({
  darkMode: 'class',
  safelist: [
    'bg-hero-charlie-brown',
    'bg-hero-circuit-board',
    'bg-hero-graph-paper',
    'bg-hero-jigsaw',
    'bg-hero-wiggle',
    'dark:bg-hero-circuit-board-light',
  ],
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
            code: {
              backgroundColor: colors.gray[200],
              borderRadius: '4px',
              padding: '1px 3px',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            blockquote: {
              marginLeft: '0',
              marginRight: '0',
            },
            'blockquote p:first-of-type::before': {
              content: 'none',
            },
            'blockquote p:last-of-type::after': {
              content: 'none',
            },
            ol: {
              paddingLeft: '0.8em',
            },
          },
        },
        DARK: {
          css: {
            'ul > li::before': {
              backgroundColor: colors.gray[600],
            },
            code: {
              backgroundColor: colors.gray[800],
            }
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
    heropatternsPlugin({
      patterns: [
        'charlie-brown',
        'circuit-board',
        'graph-paper',
        'jigsaw',
        'wiggle',
      ],
      colors: {
        default: '#000000',
        light: '#ffffff',
      },
      opacity: {
        default: '0.05',
      },
    }),
  ],
})
