<template>
  <div class="pb-12">
    <KitHero>
      <div class="flex flex-wrap items-center justify-between gap-4">
        <p class="flex-grow font-semibold text-3xl">Documentation</p>
        <DocsHeroSearch search-root="docs/2.x" />
      </div>
    </KitHero>

    <section class="container mx-auto">
      <div class="p-4">
        <div
          class="flex justify-between flex-wrap gap-4 lg:flex-nowrap lg:gap-0 lg:divide-x divide-grey-100 dark:divide-gray-800"
        >
          <div
            class="flex-shrink-0 border rounded-md w-full lg:border-0 lg:w-80 dark:border-gray-700"
          >
            <div
              class="flex justify-between lg:hidden items-center p-4 bg-gray-100 dark:bg-gray-800"
              @click="menuExpanded = !menuExpanded"
            >
              <b>Pages</b>
              <fa-icon :icon="menuExpanded ? 'caret-up' : 'bars'"></fa-icon>
            </div>
            <div :class="menuClass">
              <DocsSidebarView v-if="sidebarMenu" :sidebar-menu="sidebarMenu" />
            </div>
          </div>
          <div class="lg:pl-6">
            <NuxtChild />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'
import Component from 'vue-class-component'

type SidebarDocument = IContentDocument & { sidebar: any }

@Component({
  async asyncData({ $content }) {
    const sidebarDoc: SidebarDocument = (await $content(
      'sidebars/2.x-docs'
    ).fetch()) as SidebarDocument

    return {
      sidebarMenu: sidebarDoc.sidebar,
    }
  },
  transition(to, from) {
    if (from?.path.includes('/docs/2.x') && to?.path.includes('/docs/2.x')) {
      return 'none'
    }
    return 'page'
  },
})
export default class Docs2xParent extends Vue {
  menuExpanded: boolean = false
  sidebarMenu: any | null = null

  get menuClass() {
    return {
      hidden: !this.$data.menuExpanded,
      'lg:block': true,
    }
  }
}
</script>
