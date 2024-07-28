import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

import daisyui from 'daisyui'
import { light: daisyThemeLight, dark: daisyThemeDark } from 'daisyui/src/theming/themes'

const daisyThemeEssxCommon = {
  primary: '#FC4F59',
  secondary: '#7142FF',
  accent: '#D345E6',

  "--rounded-box": "0.5rem", // border radius rounded-box utility class, used in card and other large boxes
  "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
  "--rounded-badge": "1.0rem", // border radius rounded-badge utility class, used in badges and similar
  //"--animation-btn": "0.25s", // duration of animation when you click on button
  //"--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
  //"--btn-focus-scale": "0.95", // scale transform of button when you focus on it
  //"--border-btn": "1px", // border width of buttons
  //"--tab-border": "1px", // border width of tabs
  //"--tab-radius": "0.5rem", // border radius of tabs

  // Custom colours
  '--balloon': '67.2% 0.159 35.38', // #E66C4D
  '--discord': '57.74% 0.209 273.85', // #5865F2
}

export default {
  content: [],

  theme: {
    extend: {
      colors: {
        "balloon": 'oklch(var(--balloon) / <alpha-value>)',
        "discord": 'oklch(var(--discord) / <alpha-value>)',
      }
    },
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
        }
      }
    ],
    darkTheme: 'dark',
    base: true,

  },

  darkMode: ['class', '[data-theme="dark"]'],
} satisfies Config

