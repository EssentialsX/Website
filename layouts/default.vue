<template>
  <div class="overflow-x-hidden !motion-reduce:transition-none">
    <Navbar />

    <section
      class="main-content transition-colors ease-linear dark:bg-gray-900 dark:text-white min-h-[80vh]"
    >
      <Nuxt :nuxt-child-key="childKey" />
    </section>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class DefaultLayout extends Vue {
  get childKey() {
    return this.$route.path
  }
}
</script>
