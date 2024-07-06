<template>
  <div>
    <div class="w-screen py-1 bg-gray-900 text-white">
      <div class="flex items-center container mx-auto h-full px-4">
        <NuxtLink to="/">
          <img
            class="h-6"
            alt="EssentialsX logo"
            src="@/assets/images/logo-navbar.png"
          />
        </NuxtLink>

        <span class="flex-grow"></span>

        <span class="hidden md:flex items-center my-1">
          <NavbarItem to="/downloads">Downloads</NavbarItem>
          <NavbarItem to="/docs">Docs</NavbarItem>
          <NavbarItem to="/misc/get-help">Get help</NavbarItem>
          <NavbarItem to="/misc/support-us">Support us</NavbarItem>

          <NavbarThemeToggle />
        </span>
        <span class="md:hidden flex pl-2">
          <NavbarThemeToggle />
          <a class="pl-1 py-2 ml-2" @click="toggleMenu">
            <IconFasBars />
          </a>
        </span>
      </div>
    </div>
    <div v-if="menuOpen" class="md:hidden p-2 bg-gray-800 text-white">
      <div class="container mx-auto flex flex-col">
        <NavbarItem
          to="/downloads"
          class="flex flex-row items-center gap-2"
        >
          <IconFasDownload />
          <span>Downloads</span>
        </NavbarItem>
        <NavbarItem
          to="/docs"
          class="flex flex-row items-center gap-2"
        >
          <IconFasBook />
          <span>Docs</span>
        </NavbarItem>
        <NavbarItem
          to="/misc/get-help"
          class="flex flex-row items-center gap-2"
        >
          <IconFaLifeRing />
          <span>Get help</span>
        </NavbarItem>
        <NavbarItem
          to="/misc/support-us"
          class="flex flex-row items-center gap-2"
        >
          <IconFaHeart fixed-width />
          <span>Support us</span>
        </NavbarItem>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

// TODO: move color mode toggle into its own component


const menuOpen = ref(false)
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}


</script>
