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

    black: hsl(0, 0, 4),
    'black-bis': hsl(0, 0, 7),
    'black-ter': hsl(0, 0, 14),

    'grey-darker': hsl(0, 0, 21),
    'grey-dark': hsl(0, 0, 29),
    grey: hsl(0, 0, 48),
    'grey-light': hsl(0, 0, 71),
    'grey-lighter': hsl(0, 0, 86),
    'grey-lightest': hsl(0, 0, 93),

    'white-ter': hsl(0, 0, 96),
    'white-bis': hsl(0, 0, 98),
    white: hsl(0, 0, 100),
  },
  dark: {
    primary: '#E93B38',
    secondary: '#F56C2F',
    tertiary: '#FF308C',

    black: hsl(0, 0, 100),
    'black-bis': hsl(0, 0, 98),
    'black-ter': hsl(0, 0, 96),

    'grey-darker': hsl(0, 0, 93),
    'grey-dark': hsl(0, 0, 86),
    grey: hsl(0, 0, 71),
    'grey-light': hsl(0, 0, 48),
    'grey-lighter': hsl(0, 0, 29),
    'grey-lightest': hsl(0, 0, 21),

    'white-ter': hsl(0, 0, 14),
    'white-bis': hsl(0, 0, 7),
    white: hsl(0, 0, 4),
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
