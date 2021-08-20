const { hsl } = require('bulma-css-vars')

const appColors = {
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
}

module.exports = {
  sassEntryFile: './assets/scss/main.scss',
  jsOutputFile: './plugins/darkmode/bulma-colors.js',
  sassOutputFile: './assets/scss/generated-bulma-vars.sass',
  cssFallbackOutputFile: './assets/scss/generated-fallback.css',
  colorDefs: appColors,
  transition: '0.5s ease',
}
