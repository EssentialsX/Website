<template>
  <div class="block">
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
    <b-progress v-if="loading" type="is-primary" />
    <b-message v-if="downloadState.error" type="is-danger" has-icon>
      <b>Failed to load downloads!</b> <br />
      {{ downloadState.error.message }}
    </b-message>
    <div v-if="ready">
      <div v-for="key in entries.keys()" :key="key" class="block">
        <h1 class="title is-5">{{ key }}</h1>
        <div v-for="moduleId in entries.get(key)" :key="moduleId" class="card">
          <div class="card-content">
            <DownloadsEntry :module="moduleId" />
          </div>
        </div>
      </div>
    </div>
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
import DownloadsEntry from '@/components/DownloadsEntry.vue'

@Component({
  components: {
    DownloadsEntry,
  },
})
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
