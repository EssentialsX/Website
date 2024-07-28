<template>
  <NuxtLayout>
    <KitContainer>
      <button class="btn btn-primary mb-2" @click="showRaw = !showRaw">Toggle raw view</button>
      <div class="font-mono bg-base-300 text-white rounded-xl p-4" v-if="showRaw">
        <code>
          <pre>{{ articles }}</pre>
        </code>
      </div>
      <table class="table table-lg bg-base-300" v-else>
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
</script>
