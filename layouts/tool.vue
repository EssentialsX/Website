<template>
  <div class="overflow-x-hidden !motion-reduce:transition-none">
    <NavMini />

    <section
      class="main-content transition-colors ease-linear dark:bg-gray-800 dark:text-white min-h-[calc(100vh_-_80px)]"
    >
      <Nuxt :nuxt-child-key="childKey" />
    </section>

    <FooterMini />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class ToolLayout extends Vue {
  get childKey() {
    return this.$route.path
  }
}
</script>
