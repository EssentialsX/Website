<template>
  <div class="pt-2">
    <div
      v-if="dumper"
      class="bg-dumper opacity-40 absolute top-0 left-0 h-[100vh] w-[100vw]"
    ></div>
    <div class="container mx-auto px-4 py-2">
      <DumpViewer v-if="hasDump" />
      <div v-else class="prose">
        <p>
          The dump viewer allows you to share data about your server. This is
          useful when getting support for EssentialsX or other plugins.
        </p>
        <p>
          You can create a dump by running
          <code>/ess dump ...</code> from in-game or from the console.
          EssentialsX will collect and upload data about your server and provide
          a link to this tool to view the data.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import { DumpFetchPayload } from '~/store/dump'

const BYTEBIN_HOST_DEFAULT = 'bytebin.lucko.me'

@Component({
  layout: 'tool',
  meta: {
    title: 'Dump Viewer',
  },
  fetchOnServer: false,
  async fetch() {
    await this.$store.dispatch('dump/reset')

    const version = this.$route.query.v || 1
    const host =
      version === 1
        ? this.$config.pasteggApiRoot
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
    await this.$store.dispatch('dump/fetch', fetchPayload)
  },
  fetchKey(getCounter: Function) {
    return this.$route.query + getCounter('dump')
  },
})
export default class DumpViewerPage extends Vue {
  dumper: boolean = false

  get hasDump(): boolean {
    return !!this.$route.query.id
  }

  @Watch('$route.query')
  refresh() {
    this.$fetch()
  }
}
</script>

<style lang="scss" scoped>
.bg-dumper {
  background-image: url('https://cdn.discordapp.com/emojis/970349605336277042.gif');
}

.bg-dumper:hover {
  background-image: url('https://cdn.discordapp.com/emojis/868961711816839169.gif');
}
</style>
