<template>
  <component
    v-if="tag"
    :is="tag"
    v-bind="$attrs"
    class="p-2 hover:bg-gray-700 rounded transition-colors block"
  >
    <slot />
  </component>
  <NuxtLink
    v-else
    v-bind="$attrs"
    class="p-2 hover:bg-gray-700 rounded transition-colors"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  tag?: string;
}>();
</script>
