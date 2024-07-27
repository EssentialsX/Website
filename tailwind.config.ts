import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

import daisyui from 'daisyui'
import { light: daisyThemeLight, dark: daisyThemeDark } from 'daisyui/src/theming/themes'

const daisyThemeEssxCommon = {
  primary: '#FC4F59',
  secondary: '#7142FF',
  balloon: '#E66C4D',
  accent: '#D345E6',
  neutral: '#FFFFFF',
  'base-100': '#FFFFFF',
}

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
    daisyui,
  ],

  daisyui: {
    themes: [
      {
        light: {
          ...daisyThemeLight,
          ...daisyThemeEssxCommon,
        },
        dark: {
          ...daisyThemeDark,
          ...daisyThemeEssxCommon,
          neutral: daisyThemeDark.neutral,
          'base-100': daisyThemeDark['base-100']
        }
      }
    ],
    darkTheme: 'dark',
    base: true,

  },
} satisfies Config

