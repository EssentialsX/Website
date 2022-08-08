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

@Component({
  layout: 'tool',
  meta: {
    title: 'Dump Viewer',
  },
})
export default class DumpViewerPage extends Vue {
  dumper: boolean = false

  get hasDump(): boolean {
    return !!this.$route.query.id
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
