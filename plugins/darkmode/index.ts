import { Plugin } from '@nuxt/types'
import { ColorUpdater, hsl } from 'bulma-css-vars'
import { ColorCallSet, Hsl } from 'bulma-css-vars/dist/types'
import { bulmaCssVariablesDefs } from './bulma-colors'

const themeKey = 'preferred-theme'
const modes: { [index: string]: { [index: string]: string | Hsl } } = {
  light: {
    primary: '#E93B38',
    secondary: '#F56C2F',
    tertiary: '#FF308C',

    'scheme-main': hsl(0, 0, 100),
    'scheme-main-bis': hsl(0, 0, 98),
    'scheme-main-ter': hsl(0, 0, 96),
    'scheme-main-invert': hsl(0, 0, 4),
    'scheme-main-invert-bis': hsl(0, 0, 7),
    'scheme-main-invert-ter': hsl(0, 0, 14),

    background: hsl(0, 0, 96),
    text: hsl(0, 0, 29),
    'text-light': hsl(0, 0, 48),
    'text-strong': hsl(0, 0, 21),
    'text-invert': '#ffffff',

    border: hsl(0, 0, 86),
    'border-hover': hsl(0, 0, 71),
    'border-light': hsl(0, 0, 93),
    'border-light-hover': hsl(0, 0, 71),
  },
  dark: {
    primary: '#9c2825',
    secondary: '#F56C2F',
    tertiary: '#FF308C',

    'scheme-main': hsl(0, 0, 8),
    'scheme-main-bis': hsl(0, 0, 20),
    'scheme-main-ter': hsl(0, 0, 28),
    'scheme-main-invert': hsl(0, 0, 98),
    'scheme-main-invert-bis': hsl(0, 0, 96),
    'scheme-main-invert-ter': hsl(0, 0, 94),

    background: hsl(0, 0, 4),
    text: hsl(0, 0, 94),
    'text-light': hsl(0, 0, 88),
    'text-strong': hsl(0, 0, 100),
    'text-invert': '#000000',

    border: hsl(0, 0, 14),
    'border-hover': hsl(0, 0, 29),
    'border-light': hsl(0, 0, 7),
    'border-light-hover': hsl(0, 0, 29),
  },
}

const updater = new ColorUpdater(
  (bulmaCssVariablesDefs as unknown) as ColorCallSet
)

declare module 'vue/types/vue' {
  // this.$theme inside Vue components
  interface Vue {
    $theme(theme?: string): string
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$theme inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $theme(theme?: string): string
  }
  // nuxtContext.$theme
  interface Context {
    $theme(theme?: string): string
  }
}

declare module 'vuex/types/index' {
  // this.$theme inside Vuex stores
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  interface Store<S> {
    $theme(theme?: string): string
  }
}

const themePlugin: Plugin = (_context, inject) => {
  let currentTheme = 'light'

  function setTheme(theme: string, manual: boolean) {
    if (!modes[theme]) {
      // eslint-disable-next-line no-console
      console.error(`Invalid theme specified: ${theme}`)
      return
    }

    for (const color in modes[theme]) {
      if (Object.hasOwnProperty.call(modes[theme], color)) {
        const value = modes[theme][color]
        updater.updateVarsInDocument(color, value as string)
      }
    }

    if (manual) {
      localStorage.setItem(themeKey, theme)
    }

    currentTheme = theme
  }

  function setInitialTheme() {
    const preferred = localStorage.getItem(themeKey)
    if (preferred) {
      setTheme(preferred, false)
    } else if (window.matchMedia('(prefers-color-scheme: dark)')) {
      setTheme('dark', false)
    }
  }

  inject('theme', (theme: string) => {
    if (theme) {
      setTheme(theme, true)
    }

    return currentTheme
  })

  setInitialTheme()
}

export default themePlugin
