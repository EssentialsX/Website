<template>
  <div class="">
    <div class="menu">
      <template v-for="(contents, title) in sidebarMenu">
        <p :key="`${title}_label`" class="menu-label">{{ title }}</p>
        <DocsSidebarMenuList :key="`${title}_list`" :entries="contents" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    sidebarMenu: {
      type: Object,
      required: true,
    },
  },
})
export default class DocsSidebar extends Vue {}
</script>
