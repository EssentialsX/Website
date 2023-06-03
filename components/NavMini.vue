<template>
  <div>
    <div class="w-screen py-2 bg-gray-900 text-white">
      <div class="flex gap-2 items-center container mx-auto h-full px-4">
        <NuxtLink to="/">
          <img
            class="h-4"
            alt="EssentialsX logo"
            src="@/assets/images/logo-navbar.png"
          />
        </NuxtLink>
        <span class="font-semibold">{{ pageTitle }}</span>
        <span class="flex-grow"></span>
        <span class="items-center">
          <a
            class="p-2 hover:bg-gray-700 rounded transition-colors"
            @click="toggleTheme"
          >
            // TODO: <Icon :name="themeIcon" />
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO theme toggle, page title
const pageTitle = computed(() => "TODO")

const themeIcon = computed(() => 'TODO')

function toggleTheme() {}
</script>
