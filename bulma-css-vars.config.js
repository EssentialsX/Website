const { hsl } = require('bulma-css-vars')

const appColors = {
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
}

module.exports = {
  sassEntryFile: './assets/scss/main.scss',
  jsOutputFile: './plugins/darkmode/bulma-colors.js',
  sassOutputFile: './assets/scss/generated-bulma-vars.sass',
  cssFallbackOutputFile: './assets/scss/generated-fallback.css',
  colorDefs: appColors,
  transition: '0.5s ease',
}
