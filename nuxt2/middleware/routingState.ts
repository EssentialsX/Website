import { Context } from '@nuxt/types'

export default function ({ route, store }: Context) {
  const pageTitle = route.meta?.reduce(
    (title: string, meta: any) => meta.title || title,
    'EssentialsX'
  ) as string
  store.commit('routing/SET_PAGE_TITLE', pageTitle)
}
