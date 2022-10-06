<template>
  <div
    class="flex flex-col border dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 dark:text-white shadow"
  >
    <slot name="header">
      <header
        v-if="title"
        class="text-white bg-gray-900 px-4 py-2 font-bold rounded-t-md"
      >
        {{ title }}
      </header>
    </slot>
    <section
      v-if="imageSrc"
      class="overflow-hidden rounded-t-md flex-shrink-0 flex-grow-0"
    >
      <div :class="imageClass">
        <nuxt-picture
          :src="imageSrc"
          :width="imageWidth"
          :height="imageHeight"
          :fit="imageFit"
        />
      </div>
    </section>
    <section class="m-4 flex-grow">
      <slot>
        <div>
          <p class="text-lg font-semibold">Card title</p>
          <p>Hello world! This is a card.</p>
        </div>
      </slot>
    </section>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string;
  collapsible?: boolean;
  imageSrc?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageFit?: string;
  imageZoom?: boolean;
}>(), {
  collapsible: false,
  imageWidth: '800',
  imageHeight: '600',
  imageFit: 'cover',
  imageZoom: false
})

const imageClass = computed(() => ({
  'hover:scale-105': props.imageZoom,
  'transition-transform': true
}))
</script>
