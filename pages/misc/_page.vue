<template>
  <div>
    <Hero>
      <p class="font-semibold text-3xl">{{ page.title }}</p>
      <p v-if="page.description" class="font-medium text-xl">{{ page.description }}</p>
    </Hero>

    <section class="section">
      <div class="container prose">
        <nuxt-content :document="page" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'no-container',
  async asyncData({ $content, params }) {
    const page = await $content(`misc/${params.page}`).fetch()
    return {
      page,
    }
  },
})
</script>
