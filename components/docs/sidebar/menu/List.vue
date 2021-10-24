<template>
  <ul class="menu-list">
    <DocsSidebarMenuListItem
      v-for="entry in entries"
      :key="entry.label"
      v-bind="entry"
    />
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    entries: {
      type: Array,
      required: true,
    },
  },
})
export default class DocsSidebarMenuList extends Vue {}
</script>
