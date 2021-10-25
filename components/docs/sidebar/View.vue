<template>
  <div>
    <section
      v-for="(contents, title) in sidebarMenu"
      :key="`sidebar_section_${title}`"
      class="m-4 md:ml-2 first-of-type:mt-2 text-mg"
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
