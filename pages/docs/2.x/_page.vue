<template>
  <div class="section">
    <div class="container mx-auto p-4">
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
            <DocsSidebarView :sidebar-menu="sidebarMenu" />
          </div>
        </div>
        <div class="lg:pl-6">
          <nav class="mb-4">
            <ul>
              <li class="inline-block"><nuxt-link to="/docs">Docs</nuxt-link></li>
              <li class="inline-block mx-2">/</li>
              <li class="inline-block"><nuxt-link to="/docs/2.x/Home">2.x</nuxt-link></li>
              <li class="inline-block mx-2">/</li>
              <li class="inline-block font-semibold">
                <a>{{ title }}</a>
              </li>
            </ul>
          </nav>
          <div class="prose dark:prose-invert max-w-none">
            <nuxt-content :document="page" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'

type SidebarDocument = IContentDocument & { sidebar: any }

export default Vue.extend({
  layout: 'docs-v2',
  async asyncData({ $content, params }) {
    const page = await $content(`docs/2.x/${params.page}`).fetch()
    const sidebarDoc: SidebarDocument = (await $content(
      'sidebars/2.x-docs'
    ).fetch()) as SidebarDocument

    return {
      page,
      sidebarMenu: sidebarDoc.sidebar,
      menuExpanded: false,
    }
  },
  computed: {
    menuClass() {
      return {
        'hidden': !this.$data.menuExpanded,
        'lg:block': true,
      }
    },
    title(): String {
      return this.$data.page.title || this.$data.page.slug || 'hello'
    },
  },
})
</script>
