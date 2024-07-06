<template>
  <div>
    <div class="w-screen py-1 bg-gray-900 text-white">
      <div class="flex gap-2 items-center container mx-auto h-full px-2">
        <NuxtLink to="/">
          <img
            class="h-4"
            alt="EssentialsX logo"
            src="@/assets/images/logo-navbar.png"
          />
        </NuxtLink>
        <span class="font-semibold">{{ pageTitle }}</span>
        <span class="flex-grow"></span>
        <span class="min-w-20px">
          <NavbarThemeToggle />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO theme toggle, page title
const contentMeta = useContent()
const pageTitle = computed(() => contentMeta.page.value.title)

const themeIcon = computed(() => 'TODO')

function toggleTheme() {}
</script>
