<template>
  <div>
    <div
      v-if="dumper"
      class="bg-dumper opacity-40 absolute top-0 left-0 h-[100vh] w-[100vw]"
    ></div>
    <div class="container mx-auto px-4 py-2">
      <DumpViewer />
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
