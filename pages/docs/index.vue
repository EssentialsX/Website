<template>
  <div class="min-h-screen"></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'docs-v2',
  beforeCreate() {
    this.$nuxt.context.redirect('/docs/2.x/Home')
  },
})
</script>
