export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'EssentialsX',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'EssentialsX: the essential plugin suite for Minecraft servers.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/darkmode/index.ts', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    'nuxt-windicss',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      remarkPlugins: [
        [
          'remark-autolink-headings',
          {
            behavior: 'append',
            content: {
              type: 'element',
              tagName: 'span',
              properties: { className: ['icon', 'is-small', 'pl-5'] },
              children: [
                {
                  type: 'element',
                  tagName: 'i',
                  properties: {
                    className: ['mdi', 'mdi-link', 'mdi-rotate-135'],
                  },
                },
              ],
            },
          },
        ],
        [
          'remark-wiki-link',
          {
            pageResolver: (name) => {
              return [
                name.replace(/ /g, '-'),
                name.replace(/ /g, '-').toLowerCase(),
              ]
            },
            hrefTemplate: (permalink) => {
              const anchorText = /#.+/
              if (permalink.search(anchorText) === -1) {
                return `/docs/2.x/${permalink}`
              } else {
                const fixedAnchor = permalink.match(anchorText)[0].toLowerCase()
                return `/docs/2.x/${permalink.replace(
                  anchorText,
                  ''
                )}${fixedAnchor.replace(/%20/g, '-').toLowerCase()}`
              }
            },
            aliasDivider: '|',
          },
        ],
      ],
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  fontawesome: {
    component: 'fa',
    suffix: true,
    icons: {
      solid: ['faBars', 'faCaretUp', 'faSearch'],
      regular: [],
      light: [],
    },
  },
}
