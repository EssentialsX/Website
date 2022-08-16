<template>
  <section>
    <client-only>
      <DumpViewerContents v-if="status == 'ready'" :dump="dumpData" />

      <div
        slot="placeholder"
        class="w-full py-10 flex flex-col items-center justify-around"
      >
        <KitLoader size="xl" />
      </div>
    </client-only>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { DumpFetchPayload, DumpState } from '@/store/dump'

const PASTEGG_HOST = 'api.paste.gg'
const BYTEBIN_HOST_DEFAULT = 'bytebin.lucko.me'

@Component
export default class DumpViewer extends Vue {
  get dumpState(): DumpState {
    return this.$store.state.dump as DumpState
  }

  get status() {
    return this.dumpState.status
  }

  get error() {
    return this.dumpState.error
  }

  get dumpData() {
    return this.dumpState.dump
  }

  mounted() {
    this.$store.dispatch('dump/reset')

    const version = this.$route.query.v || 1
    const host =
      version === 1
        ? PASTEGG_HOST
        : this.$route.query.host || BYTEBIN_HOST_DEFAULT

    const id = this.$route.query.id as string
    if (!id) {
      return
    }

    const fetchPayload: DumpFetchPayload = {
      type: version === 1 ? 'paste.gg' : 'bytebin',
      host: host as string,
      id: id as string,
    }
    this.$store.dispatch('dump/fetch', fetchPayload)
  }
}
</script>
