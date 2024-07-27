<template>
  <NuxtLayout>
    <KitContainer>
      <KitButtons>
        <KitButton @click="showRaw = !showRaw">Toggle raw view</KitButton>
      </KitButtons>
      <div class="font-mono bg-dark text-white rounded-lg p-4" v-if="showRaw">
        <code>
          <pre>{{ articles }}</pre>
        </code>
      </div>
      <table class="table" v-else>
        <thead>
          <tr class="font-bold">
            <td>Title</td>
            <td>ID</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in articles">
            <td class="underline"><NuxtLink :to="article._path">{{ article.title }}</NuxtLink></td>
            <td>{{ article._id }}</td>
          </tr>
        </tbody>
      </table>
    </KitContainer>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { data: articles } = await useAsyncData('home', () => queryContent().find())

const showRaw = ref(false);

console.log(articles)
</script>
