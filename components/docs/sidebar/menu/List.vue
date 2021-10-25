<template>
  <div>
    <div v-for="entry in entries" :key="entry.label" class="block">
      <fa-icon v-if="nest" icon="ellipsis-v" class="text-gray-400 mx-2" />
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
}
</script>
