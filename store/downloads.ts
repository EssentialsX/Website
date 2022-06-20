import { MutationTree, ActionTree } from 'vuex/types/index'
import { RootState } from '.'
import { fetchLatestDev, fetchLatestStable } from '~/api/downloads'

export type Branch = 'stable' | 'dev'
export type Status = 'ready' | 'loading' | 'failed' | 'not-started'
export type Tag = {
  text: string
  color: string
}
export type DocsUrl = {
  link?: string
  href?: string
}

export type FetchPayload = {
  readonly series: string
  readonly branch: Branch
}

export class Artifact {
  readonly name: string
  readonly description: string
  readonly icon?: string | string[]
  readonly tags: Tag[]
  readonly docsUrl?: DocsUrl
  downloadUrl: string | null = null

  constructor(
    name: string,
    description: string,
    icon?: string | string[],
    tags: Tag[] = [],
    docsUrl?: DocsUrl
  ) {
    this.name = name
    this.description = description
    this.icon = icon
    this.tags = tags
    this.docsUrl = docsUrl
  }
}

export const state = () => ({
  branch: 'dev' as Branch,
  status: 'not-started' as Status,
  version: {
    name: 'unknown',
    commit: null as string | null,
    build: null as string | null,
  },
  error: null as Error | null,
  artifacts: {
    core: new Artifact(
      'EssentialsX',
      'Core functionality: teleports, private messages, homes, warps and more',
      'flask',
      [{ text: 'REQUIRED', color: 'bg-red-600' }]
    ),
    antibuild: new Artifact(
      'EssentialsX AntiBuild',
      'Simple permissions-based building control',
      'tools',
      [{ text: 'OPTIONAL', color: 'bg-gray-500' }],
      { href: 'https://wiki.mc-ess.net/wiki/AntiBuild' }
    ),
    chat: new Artifact(
      'EssentialsX Chat',
      'Global and local chat + chat formatting',
      'comment-dots',
      [
        { text: 'RECOMMENDED', color: 'bg-blue-600' },
        { text: 'OPTIONAL', color: 'bg-gray-500' },
      ]
    ),
    discord: new Artifact(
      'EssentialsX Discord',
      'Lightweight chat, messaging and console integration with Discord',
      ['fab', 'discord'],
      [
        { text: 'NEW', color: 'bg-green-600' },
        { text: 'OPTIONAL', color: 'bg-gray-500' },
      ],
      { link: '/docs/2.x/Discord-Tutorial' }
    ),
    discordlink: new Artifact(
      'EssentialsX Discord Link',
      'Minecraft-to-Discord account linking (requires EssentialsX Discord)',
      'link',
      [{ text: 'COMING SOON', color: 'bg-green-600' }]
    ),
    geo: new Artifact(
      'EssentialsX Geo',
      'Geographical player lookup (formerly EssentialsX GeoIP)',
      'globe-americas',
      [{ text: 'OPTIONAL', color: 'bg-gray-500' }],
      { link: '/docs/2.x/GeoIP' }
    ),
    protect: new Artifact(
      'EssentialsX Protect',
      'Configurable world protection and gameplay control',
      'cube',
      [{ text: 'OPTIONAL', color: 'bg-gray-500' }]
    ),
    spawn: new Artifact(
      'EssentialsX Spawn',
      'Spawnpoint control + per-player and per-group spawns',
      'map-marker',
      [
        { text: 'RECOMMENDED', color: 'bg-blue-600' },
        { text: 'OPTIONAL', color: 'bg-gray-500' },
      ]
    ),
    xmpp: new Artifact(
      'EssentialsX XMPP',
      'Lightweight chat, messaging and server log integration with Jabber/XMPP services',
      'comments',
      [
        { text: 'OPTIONAL', color: 'bg-gray-500' },
        { text: 'LEGACY', color: 'bg-yellow-600' },
      ],
      { href: 'https://wiki.mc-ess.net/wiki/XMPP' }
    ),
  },
})

export type DownloadsState = ReturnType<typeof state>
export type ModuleId = keyof DownloadsState['artifacts']

const versionRegex = /EssentialsX[a-zA-Z]*-([0-9.]+?(?:-(?:dev|rc|beta|alpha)\+[0-9]+)?(?:-([0-9a-fA-F]+?))?)\.jar/

export const mutations: MutationTree<DownloadsState> = {
  SET_DOWNLOAD_URL: (
    state,
    payload: [keyof DownloadsState['artifacts'], string | null]
  ) => {
    if (state.artifacts[payload[0]]) {
      state.artifacts[payload[0]].downloadUrl = payload[1]
    }
  },
  SET_BRANCH: (state, payload: Branch) => {
    state.branch = payload
  },
  SET_ERROR: (state, payload: Error | null) => {
    state.error = payload
  },
  SET_STATUS: (state, payload: Status) => {
    state.status = payload
  },
  SET_VERSION: (state, payload: typeof state.version) => {
    state.version = payload || {
      name: 'unknown',
      commit: null as string | null,
      build: null as string | null,
    }
  },
}

export const actions: ActionTree<DownloadsState, RootState> = {
  reset({ state, commit }) {
    commit('SET_STATUS', 'not-started')
    commit('SET_VERSION', null)
    Object.keys(state.artifacts).forEach((moduleName) =>
      commit('SET_DOWNLOAD_URL', [moduleName, null])
    )
  },
  async fetch({ commit, dispatch }, payload: FetchPayload) {
    commit('SET_STATUS', 'loading')
    commit('SET_ERROR', null)
    commit('SET_BRANCH', payload.branch)

    try {
      if (payload.series === '2.x') {
        switch (payload.branch) {
          case 'dev':
            await dispatch('fetch2xDev')
            break
          case 'stable':
            await dispatch('fetch2xStable')
            break
        }
        commit('SET_STATUS', 'ready')
        return
      }
    } catch (error) {
      commit('SET_ERROR', error)
    }

    commit('SET_STATUS', 'failed')
  },
  async fetch2xDev({ state, commit }) {
    const build = await fetchLatestDev(this.$axios)
    if (!build.artifacts || build.artifacts.length === 0) {
      throw new Error(`No artifacts found for build ${build.displayName}!`)
    }

    build.artifacts.forEach((artifact) => {
      const moduleName = artifact.fileName.split('-')[0].substring(11) || 'core'
      commit('SET_DOWNLOAD_URL', [
        moduleName.toLowerCase().replace('geoip', 'geo'),
        `https://ci.ender.zone/job/EssentialsX/lastSuccessfulBuild/artifact/${artifact.relativePath}`,
      ])

      if (state.version.name === 'unknown') {
        const fileNameSplit = artifact.fileName.split('-')

        const m = versionRegex.exec(artifact.fileName)
        if (m === null) {
          return
        }
        const name = m[1]
        const commitHash = m[2]

        commit('SET_VERSION', {
          name,
          commit: commitHash,
          build: build.number,
        })
      }
    })
  },
  async fetch2xStable({ commit }) {
    const build = await fetchLatestStable(this.$axios)

    if (!build.assets || build.assets.length === 0) {
      throw new Error(`No downloads found for release "${build.tag_name}"!`)
    }

    build.assets.forEach((asset) => {
      const moduleName = asset.name.split('-')[0].substring(11) || 'core'
      commit('SET_DOWNLOAD_URL', [
        moduleName.toLowerCase().replace('geoip', 'geo'),
        asset.browser_download_url,
      ])
    })

    commit('SET_VERSION', {
      name: build.tag_name,
      commit: build.tag_name,
      build: null,
    })
  },
}

export const namespaced = true
