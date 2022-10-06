<template>
  <div>
    <section
      v-for="(contents, title) in sidebarMenu"
      :key="`sidebar_section_${title}`"
      class="m-4 lg:(ml-0 first-of-type:mt-0)"
    >
      <p class="font-semibold text-lg mb-1">{{ title }}</p>
      <DocsSidebarMenuList :entries="contents" />
    </section>
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
