<template>
  <section
    class="hero w-screen relative bg-gradient-to-br from-red-600 to-red-700 text-white dark:(from-red-700 to-red-900)"
  >
    <div v-if="pattern != undefined" :class="patternClass"></div>
    <div class="hero-content">
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  pattern?: string;
  patternDark?: string;
}>()

const patternClass = computed(() => ({
  absolute: true,
  'top-0': true,
  'left-0': true,
  'w-full': true,
  'h-full': true,
  [`${props.pattern}`]: true,
  [`dark:${props.patternDark}`]: !!props.patternDark,
}))
</script>
