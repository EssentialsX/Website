import { Plugin } from '@nuxt/types'

const themeKey = 'preferred-theme'

const modes = ['dark', 'light']

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
    if (!modes.includes(theme)) {
      // eslint-disable-next-line no-console
      console.error(`Invalid theme specified: ${theme}`)
      return
    }

    // TODO apply theme

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
