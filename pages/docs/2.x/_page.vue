<template>
  <div>
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
    <div class="prose !max-w-full">
      <nuxt-content :document="page" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const page = await $content(`docs/2.x/${params.page}`).fetch()

    return {
      page,
    }
  },
  computed: {
    title(): String {
      return this.$data.page.title || this.$data.page.slug || 'hello'
    },
  },
})
</script>
