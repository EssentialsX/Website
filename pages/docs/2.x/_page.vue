<template>
  <div class="section">
    <div class="container mx-auto p-4">
      <div class="flex justify-between flex-wrap md:flex-nowrap gap-4">
        <div class="flex-shrink-0 border md:border-0 rounded w-full md:w-80">
          <div
            class="flex justify-between md:hidden items-center p-4 bg-gray-100"
            @click="menuExpanded = !menuExpanded"
          >
            <b>Pages</b>
            <fa-icon :icon="menuExpanded ? 'caret-up' : 'bars'"></fa-icon>
          </div>
          <div :class="menuClass">
            <DocsSidebarView :sidebar-menu="sidebarMenu" />
          </div>
        </div>
        <div class="flex-grows">
          <nav class="breadcrumb is-medium">
            <ul>
              <li><nuxt-link to="/docs">Docs</nuxt-link></li>
              <li><nuxt-link to="/docs/2.x/Home">2.x</nuxt-link></li>
              <li class="is-active">
                <a>{{ title }}</a>
              </li>
            </ul>
          </nav>
          <div class="prose max-w-none">
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
        'md:block': true,
      }
    },
    title(): String {
      return this.$data.page.title || this.$data.page.slug || 'hello'
    },
  },
})
</script>
