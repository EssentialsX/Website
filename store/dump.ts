import { MutationTree, ActionTree } from 'vuex/types/index'
import { RootState } from '.'
import { fetch as fetchPasteGG, PasteGGFile } from '~/api/paste/pastegg'

export type DumpPlugin = {
  name: string
  version: string
  description: string
  main: string
  enabled: Boolean
  official: Boolean
  unsupported: Boolean
  authors: string[]
}

export type DumpDataV1 = {
  meta: {
    timestamp: Number
    sender: string
    senderUuid: string
  }
  'server-data': {
    'bukkit-version': string
    'server-version': string
    'server-brand': string
    'online-mode': string
    'support-status': {
      status: string
      supported: Boolean
      trigger?: string
    }
  }
  environment: {
    'java-version': string
    'operating-system': string
    uptime: string
    'allocated-memory': string
  }
  'ess-data': {
    version: string
    'update-data': {
      id: string
      branch: string
      dev: Boolean
    }
    'economy-layer': {
      enabled: Boolean
      'selected-layer': Boolean
      name: string
      'layer-version': string
      'backend-name': string
    }
    addons: DumpPlugin[]
  }
  plugins: DumpPlugin[]
}

// export type DumpDataV2 = {}

export type DumpFiles = {
  mainConfig?: string
  discordConfig?: string
  kitsConfig?: string
  worthConfig?: string
  tprConfig?: string
  spawnsConfig?: string
  commandsYml?: string
  commandMap?: string
  commandOverrides?: string
  latestLog?: string
}

export type Dump = {
  version: 1
  data: DumpDataV1
  files: { [name: string]: string }
} // paste.gg, kebab-case format (legacy)

export type Status = 'loading' | 'ready' | 'failed'

// | { version: 2; data: DumpDataV2; files: { [name: string]: string } } // bytebin, camelCase format

export type DumpFetchPayload = {
  type: 'paste.gg' | 'bytebin'
  host: string
  id: string
}

const v1FileNameMap: { [fileName: string]: keyof DumpFiles } = {
  'config.yml': 'mainConfig',
  'discord-config.yml': 'discordConfig',
  'kits.yml': 'kitsConfig',
  'worth.yml': 'worthConfig',
  'tpr.yml': 'tprConfig',
  'spawn.yml': 'spawnsConfig',
  'commands.yml': 'commandsYml',
  'commandmap.json': 'commandMap',
  'commandoverride.json': 'commandOverrides',
  'latest.log': 'latestLog',
}

function mapV1Files(files: PasteGGFile[]) {
  const dumpFiles: DumpFiles = {}
  files.forEach((file) => {
    const fileKey = v1FileNameMap[file.name]
    if (fileKey) {
      dumpFiles[fileKey] = file.content.value
    }
  })
  return dumpFiles
}

export const state = () => ({
  dump: null as Dump | null,
  status: 'loading' as Status,
  error: null as string | null,
})

export type DumpState = ReturnType<typeof state>

export const mutations: MutationTree<DumpState> = {
  SET_DUMP: (state, payload: Dump) => {
    state.dump = payload
  },
  SET_STATUS: (state, payload: Status) => {
    state.status = payload
  },
  SET_ERROR: (state, payload: string | null) => {
    state.error = payload
  },
}

export const actions: ActionTree<DumpState, RootState> = {
  reset({ commit }) {
    commit('SET_DUMP', null)
    commit('SET_STATUS', 'loading')
    commit('SET_ERROR', null)
  },
  async fetch({ commit }, payload: DumpFetchPayload) {
    commit('SET_DUMP', null)
    commit('SET_STATUS', 'loading')
    commit('SET_ERROR', null)

    try {
      if (payload.type === 'paste.gg') {
        const data = await fetchPasteGG(this.$axios, payload.id, payload.host)

        if (data.status === 'error') {
          commit('SET_ERROR', `${data.error} ${data.message || ''}`)
        } else {
          const dumpFile = data.result.files.filter(
            (file) => file.name === 'dump.json'
          )[0]
          const dump = JSON.parse(dumpFile.content.value) as DumpDataV1

          commit('SET_DUMP', {
            version: 1,
            data: dump,
            files: mapV1Files(data.result.files),
          })
          commit('SET_STATUS', 'ready')
          return
        }
      }
    } catch (error) {
      commit('SET_ERROR', error)
    }

    commit('SET_STATUS', 'failed')
  },
}

export const namespaced = true
