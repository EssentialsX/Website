<template>
  <div class="min-h-screen">
    <KitMeta title="Docs" description="Documentation for EssentialsX." />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  beforeCreate() {
    this.$nuxt.context.redirect('/docs/2.x/Home')
  },
})
</script>
