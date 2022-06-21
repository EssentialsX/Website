<template>
  <div class="min-h-[80vh]">
    <div class="content">
      <p>
        The latest {{ branch }} version of EssentialsX is
        <span v-if="version.build">
          <b>{{ version.name }} (build {{ version.build }})</b>.
        </span>
        <span v-else>
          <b>{{ version.name }}</b>.
        </span>
      </p>
    </div>
    <KitCard v-if="downloadState.error" class="mt-4">
      <b>Failed to load downloads!</b> <br />
      {{ downloadState.error.message }}
    </KitCard>
    <transition name="fade">
      <div v-if="ready">
        <div v-for="key in entries.keys()" :key="key" class="mt-4 mb-8">
          <h1 class="text-xl font-semibold my-4">{{ key }}</h1>
          <KitCard
            v-for="moduleId in entries.get(key)"
            :key="moduleId"
            class="mb-4 last:mb-0"
          >
            <div class="card-content">
              <DownloadsEntry :module="moduleId" />
            </div>
          </KitCard>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import 'vue-class-component/hooks'
import { Component, Prop, Vue } from 'vue-property-decorator'
import {
  Branch,
  DownloadsState,
  ModuleId,
  FetchPayload,
} from '@/store/downloads'

@Component
export default class Downloads extends Vue {
  readonly entries: Map<string, ModuleId[]> = new Map([
    ['Core', ['core']],
    ['Recommended add-ons', ['chat', 'spawn']],
    ['Discord', ['discord', 'discordlink']],
    ['Other add-ons', ['antibuild', 'geo', 'protect', 'xmpp']],
  ])

  @Prop() readonly series!: string
  @Prop() readonly branch!: Branch

  get downloadState() {
    return this.$store.state.downloads as DownloadsState
  }

  get status() {
    return this.downloadState.status
  }

  get loading() {
    return this.status === 'not-started' || this.status === 'loading'
  }

  get ready() {
    return this.status === 'ready'
  }

  get version() {
    return this.downloadState.version
  }

  mounted() {
    this.$store.dispatch('downloads/reset')

    const fetchPayload: FetchPayload = {
      series: this.series,
      branch: this.branch,
    }
    this.$store.dispatch('downloads/fetch', fetchPayload)
  }
}
</script>
