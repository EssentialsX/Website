import {
  presetTypography,
  presetWind,
  presetUno,
  transformerVariantGroup,
  transformerDirectives,
} from "unocss";
import { presetHeroPatterns } from "@julr/unocss-preset-heropatterns"
import { UnocssNuxtOptions } from "@unocss/nuxt"

export default {
  presets: [
    presetUno(),
    presetWind(),
    presetTypography({
      cssExtend: {
        'h3 > a, h4 > a, h5 > a, h6 > a': {
          'text-decoration': 'none',
        },
        ':not(pre) > code::before, :not(pre) > code::after': {
          'content': 'none',
        },
      },
    }),
    presetHeroPatterns(),
  ],

  transformers: [
    transformerVariantGroup(),
    transformerDirectives()
  ],

  theme: {
    fontFamily: {
      sans: 'Lato',
      mono: '"IBM Plex Mono"',
    },
    colors: {
      primary: {
        DEFAULT: "#FC4F59"
      }
    }
  },

  shortcuts: [
    {
      'app-colors': 'bg-slate-100 dark:(bg-slate-800 text-white)',
      'app-fonts': 'font-sans',
      'app-transitions': 'transition duration-500 ease-out',
      'app-size': 'min-h-100vh',
      'app-root': 'app-colors app-fonts app-transitions app-size',
      'page-container': 'mx-auto max-w-[100ch] px-4',
      'navbar-button': 'inline-block opacity-80 hover:(opacity-100 text-shadow-lg)',
      'input-common': 'border-black/5 border-1 rounded px-2'
    },
  ],

  safelist: [
    'bg-hero-charlie-brown',
    'bg-hero-circuit-board',
    'bg-hero-graph-paper',
    'bg-hero-jigsaw',
    'bg-hero-wiggle',
    'dark:bg-hero-circuit-board-light',
  ],
} as UnocssNuxtOptions
