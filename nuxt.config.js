const baseUrl =
  process.env.DEPLOY_PRIME_URL || process.env.URL || 'https://localhost:3000'

function getPublicUrl(path) {
  return baseUrl.includes('localhost') ? path : baseUrl + path
}

const defaultTitle = 'EssentialsX'
const defaultDescription =
  'EssentialsX: the essential plugin suite for Minecraft servers.'
const defaultImage = getPublicUrl('/images/social.png')

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    baseUrl,
  },

  generate: {
    fallback: '404.html',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: null,
    titleTemplate: (chunk) => {
      return chunk ? `${chunk} - EssentialsX` : 'EssentialsX'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: defaultDescription,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: defaultTitle,
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@EssentialsXTeam',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: defaultDescription,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: defaultImage,
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: defaultTitle,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: defaultTitle,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: defaultTitle,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: defaultDescription,
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'object',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: defaultImage,
      },
      {
        hid: 'og:image:secure_url',
        name: 'og:image:secure_url',
        content: defaultImage,
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: defaultTitle,
      },
      {
        hid: 'og:image:width',
        name: 'og:image:width',
        content: 1200,
      },
      {
        hid: 'og:image:height',
        name: 'og:image:height',
        content: 600,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/darkmode/index.ts', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://image.nuxtjs.org/getting-started/installation
    '@nuxt/image',
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
            behavior: 'prepend',
            content: {
              type: 'element',
              tagName: 'span',
              properties: {
                className: [
                  'pr-2',
                  'text-red-500',
                  'opacity-80',
                  'hover:opacity-100',
                ],
              },
              children: [
                {
                  type: 'element',
                  tagName: 'fa-icon',
                  properties: {
                    icon: ['hashtag'],
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
      solid: [
        'faBars',
        'faCaretUp',
        'faSearch',
        'faArrowDown',
        'faArrowRight',
        'faMoon',
        'faSun',
        'faExternalLinkAlt',
        'faExclamationTriangle',
        'faDownload',
        'faBook',
        'faHeart',
        'faLifeRing',
        'faFlask',
        'faCommentDots',
        'faMapMarker',
        'faLink',
        'faTools',
        'faGlobeAmericas',
        'faCube',
        'faComments',
        'faHashtag',
      ],
      regular: [],
      light: [],
      brands: ['faDiscord'],
    },
  },
}
