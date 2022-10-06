<template>
  <div>
    <div class="w-screen py-4 bg-gray-900 text-white">
      <div class="flex items-center container mx-auto h-full px-4">
        <NuxtLink to="/">
          <img
            class="h-6"
            alt="EssentialsX logo"
            src="@/assets/images/logo-navbar.png"
          />
        </NuxtLink>
        <span class="flex-grow"></span>
        <span class="hidden md:inline items-center">
          <NavbarItem tag="NuxtLink" to="/downloads">Downloads</NavbarItem>
          <NavbarItem tag="NuxtLink" to="/docs">Docs</NavbarItem>
          <NavbarItem tag="NuxtLink" to="/misc/get-help">Get help</NavbarItem>
          <!-- eslint-disable-next-line prettier/prettier -->
          <NavbarItem tag="NuxtLink" to="/misc/support-us">Support us</NavbarItem>
          <a
            class="p-2 hover:bg-gray-700 rounded transition-colors"
            @click="toggleTheme"
          >
            <Icon :name="themeIcon" />
          </a>
        </span>
        <span class="md:hidden pl-2">
          <a class="px-2 py-2" @click="toggleTheme">
            <Icon :name="themeIcon" />
          </a>
          <a class="px-2 py-2 ml-2" @click="toggleMenu">
            <Icon :name="menuOpen ? 'caret-up' : 'bars'" fixed-width />
          </a>
        </span>
      </div>
    </div>
    <div v-if="menuOpen" class="md:hidden p-2 bg-gray-800 text-white">
      <div class="container mx-auto flex flex-col">
        <NavbarItem
          tag="NuxtLink"
          to="/downloads"
          class="flex flex-row items-center gap-2"
        >
          <Icon name="fa6-solid:download" fixed-width />
          <span>Downloads</span>
        </NavbarItem>
        <NavbarItem
          tag="NuxtLink"
          to="/docs"
          class="flex flex-row items-center gap-2"
        >
          <Icon name="fa6-solid:book" fixed-width />
          <span>Docs</span>
        </NavbarItem>
        <NavbarItem
          tag="NuxtLink"
          to="/misc/get-help"
          class="flex flex-row items-center gap-2"
        >
          <Icon name="fa6-regular:life-ring" fixed-width />
          <span>Get help</span>
        </NavbarItem>
        <NavbarItem
          tag="NuxtLink"
          to="/misc/support-us"
          class="flex flex-row items-center gap-2"
        >
          <Icon name="fa6-regular:heart" fixed-width />
          <span>Support us</span>
        </NavbarItem>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const menuOpen = ref(false);

const themeIcon = computed(() => 'TODO')

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

// TODO: theme toggle
</script>
