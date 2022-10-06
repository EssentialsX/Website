<template>
  <span v-if="false"></span>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const props = defineProps<{
  title: string;
  description: string;
  image?: string;
}>()

const imageUrl = computed(() => props.image || config.baseUrl + '/images/social.png')

useHead({
  title: props.title,
  meta: [
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: props.title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: props.description,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: imageUrl,
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: props.title,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: props.title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: props.description,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: imageUrl,
    },
    {
      hid: 'og:image:secure_url',
      property: 'og:image:secure_url',
      content: imageUrl,
    },
    {
      hid: 'og:image:alt',
      property: 'og:image:alt',
      content: props.title,
    },
  ],
})
</script>
