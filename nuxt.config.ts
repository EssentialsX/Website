import { resolve } from "path"
import IconsResolver from "unplugin-icons/resolver"
import Icons from "unplugin-icons/vite"
import Components from "unplugin-vue-components/vite"

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
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    //'@unocss/nuxt',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    'unplugin-icons/nuxt',
  ],

  vite: {
    plugins: [
      Components({
        // we don't want to import components, just icons
        dirs: ["none"],
        // auto import icons
        resolvers: [
          // https://github.com/antfu/vite-plugin-icons
          IconsResolver({
            componentPrefix: "icon",
            enabledCollections: ["fa6-solid", "fa6-regular"],
            alias: {
              fas: "fa6-solid",
              fa: "fa6-regular"
            }
          }),
        ],
        dts: "types/generated/icons.d.ts",
      }),
      Icons({
        autoInstall: true,
      }),
    ],
  },

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
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        {
          rel: 'mask-icon',
          type: 'image/png',
          color: '#5bbad5',
          href: '/safari-pinned-tab.svg'
        },
      ],
    },
  },

  colorMode: {
    dataValue: 'theme',
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
      },
      langs: ['java', 'groovy', 'properties', 'xml', 'yaml', 'bash']
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
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  compatibilityDate: '2024-07-06'
})
