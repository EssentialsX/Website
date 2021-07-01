<template>
  <div>
    <section class="hero is-primary is-small">
      <div class="hero-body">
        <div class="container">
          <p class="title">Get help with EssentialsX</p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container content">
        <nuxt-content :document="page" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'no-container',
  async asyncData({ $content }) {
    const page = await $content('get-help').fetch()
    return {
      page,
    }
  },
})
</script>
