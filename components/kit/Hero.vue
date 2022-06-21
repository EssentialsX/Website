<template>
  <section
    class="w-screen relative bg-gradient-to-br from-red-600 to-red-700 text-white dark:(from-red-700 to-red-900)"
  >
    <div v-if="pattern != undefined" :class="patternClass"></div>
    <div class="relative container mx-auto px-4 z-2">
      <div class="py-6">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class KitHero extends Vue {
  @Prop({ default: undefined }) pattern!: string | undefined
  @Prop({ default: undefined }) patternDark!: string | undefined

  get patternClass() {
    return {
      absolute: true,
      'top-0': true,
      'left-0': true,
      'w-full': true,
      'h-full': true,
      [`bg-hero-${this.pattern}`]: true,
      [`dark:bg-hero-${this.patternDark}`]: !!this.patternDark,
    }
  }
}
</script>
