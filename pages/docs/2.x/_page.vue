<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-narrow">
          <div class="block is-hidden-tablet">
            <b-button
              :icon-left="menuExpanded ? 'chevron-up' : 'chevron-down'"
              type="is-primary"
              expanded
              @click="menuExpanded = !menuExpanded"
            >
              {{ menuExpanded ? 'Hide' : 'Show' }} menu
            </b-button>
          </div>
          <div :class="menuClass">
            <DocsSidebar :sidebar-menu="sidebarMenu" />
          </div>
        </div>
        <div class="column">
          <nav id="main-page-content" class="breadcrumb is-medium">
            <ul>
              <li><nuxt-link to="/docs">Docs</nuxt-link></li>
              <li><nuxt-link to="/docs/2.x/Home">2.x</nuxt-link></li>
              <li class="is-active">
                <a>{{ title }}</a>
              </li>
            </ul>
          </nav>
          <div class="content">
            <nuxt-content :document="page" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'docs-v2',
  async asyncData({ $content, params }) {
    const page = await $content(`docs/2.x/${params.page}`).fetch()
    const sidebarMenu = (await $content('sidebars/2.x-docs').fetch()).sidebar

    return {
      page,
      sidebarMenu,
      menuExpanded: false,
    }
  },
  computed: {
    menuClass() {
      return {
        'is-hidden-mobile': !this.$data.menuExpanded,
        block: true,
      }
    },
    title(): String {
      return this.$data.page.title || this.$data.page.slug || 'hello'
    },
  },
})
</script>
