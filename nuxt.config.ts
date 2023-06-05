const baseUrl =
  process.env.DEPLOY_PRIME_URL || process.env.URL || 'https://localhost:3000'

function getPublicUrl(path: string) {
  return baseUrl.includes('localhost') ? path : baseUrl + path
}

const defaultTitle = 'EssentialsX'
const defaultDescription =
  'EssentialsX: the essential plugin suite for Minecraft servers.'
const defaultImage = getPublicUrl('/images/social.png')

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxt/image-edge',
    '@unocss/nuxt',
    'unplugin-icons/nuxt',
  ],

  app: {
    head: {
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
    }
  },

  colorMode: {
    classSuffix: ''
  },

  content: {
    documentDriven: true,
    sources: {
      ghWiki: {
        prefix: '/docs/2.x',
        driver: 'github',
        repo: "EssentialsX/Wiki",
        branch: "nuxt",
        dir: "",
      },
    },
    markdown: {
      rehypePlugins: [
        [
          'rehype-autolink-headings',
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
                  tagName: 'Icon',
                  properties: {
                    name: ['carbon:hashtag'],
                  },
                },
              ],
            },
          },
        ],
      ]
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      }
    }
  },

  googleFonts: {
    families: {
      Lato: true,
      'IBM Plex Mono': true
    },
    download: true,
  },

  devtools: {
    enabled: true
  }
})
