<template>
  <div>
    <div
      v-for="entry in entries"
      :key="entry.label"
      :class="entryOuterClass(entry.link)"
    >
      <fa-icon v-if="nest" icon="arrow-right" class="text-gray-400 mx-2" />
      <DocsSidebarMenuListItem v-bind="entry" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class DocsSidebarMenuList extends Vue {
  @Prop({ default: false }) nest!: boolean
  @Prop() entries!: Array<any>

  entryOuterClass(link?: string) {
    const selected = link && this.$route.path.includes(link)
    return {
      'block': true,
      'pl-2': selected,
      'border-l-4': selected,
      'border-gray-200': true,
      'dark:border-gray-700': true,
    }
  }
}
</script>
