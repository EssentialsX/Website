import { ColorUpdater, hsl } from 'bulma-css-vars'
import { bulmaCssVariablesDefs } from './bulma-colors'

const modes = {
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

const updater = new ColorUpdater(bulmaCssVariablesDefs)

export default (_context, inject) => {
  inject('theme', (theme) => {
    if (!modes[theme]) {
      // eslint-disable-next-line no-console
      console.error(`Invalid theme specified: ${theme}`)
      return
    }

    for (const color in modes[theme]) {
      if (Object.hasOwnProperty.call(modes[theme], color)) {
        const value = modes[theme][color];
        updater.updateVarsInDocument(color, value)
      }
    }
  })
}
