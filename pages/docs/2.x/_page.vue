<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-2">
          <p>nav menu placeholder</p>
        </div>
        <div class="column">
          <nav class="breadcrumb is-medium">
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

    return {
      page,
    }
  },
  computed: {
    title(): string {
      return this.$data.page.title || this.$data.page.slug || 'hello'
    },
  },
})
</script>
