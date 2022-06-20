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
      block: true,
      'pl-3': !this.nest,
      'border-l-3': !this.nest,
      'border-gray-200/50': !selected,
      'dark:border-gray-700/50': !selected,
      'hover:border-gray-200': !selected,
      'hover:dark:border-gray-700': !selected,
      'border-red': selected,
      transition: true,
    }
  }
}
</script>
