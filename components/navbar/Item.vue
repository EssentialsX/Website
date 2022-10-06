<template>
  <component
    :is="tag"
    v-bind="$attrs"
    class="p-2 hover:bg-gray-700 rounded transition-colors"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  tag?: string;
}>(), {
  tag: 'span'
})
</script>
