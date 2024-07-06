<template>
  <NuxtLayout>
    <div class="font-mono">
      <code>
        <pre>{{ articles }}</pre>
      </code>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const articles = await useAsyncData('home', () => queryContent().find())
console.log(articles)
</script>
