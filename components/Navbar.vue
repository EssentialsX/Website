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

          <NavbarItem tag="a" href="#" @click="toggleTheme"><component :is="themeIcon"></component></NavbarItem>
        </span>
        <span class="md:hidden flex pl-2">
          <a class="pl-1 py-2" @click="toggleTheme">
            <component :is="themeIcon"></component>
          </a>
          <a class="pl-1 py-2 ml-2" @click="toggleMenu">
            <IconFasBars />
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
          <IconFasDownload />
          <span>Downloads</span>
        </NavbarItem>
        <NavbarItem
          tag="NuxtLink"
          to="/docs"
          class="flex flex-row items-center gap-2"
        >
          <IconFasBook />
          <span>Docs</span>
        </NavbarItem>
        <NavbarItem
          tag="NuxtLink"
          to="/misc/get-help"
          class="flex flex-row items-center gap-2"
        >
          <IconFaLifeRing />
          <span>Get help</span>
        </NavbarItem>
        <NavbarItem
          tag="NuxtLink"
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
import IconSun from "~icons/fa6-regular/sun"
import IconSunSolid from "~icons/fa6-solid/sun"
import IconMoon from "~icons/fa6-solid/moon"

// TODO: move color mode toggle into its own component
const colorMode = useColorMode()
const themeList = ["system", "light", "dark"]
const themeIcon = computed(() => {
  switch (colorMode.preference) {
    case "system":
      return IconSun
    case "light":
      return IconSunSolid
    case "dark":
      return IconMoon
  }
})

function toggleTheme() {
  let prefIndex = themeList.indexOf(colorMode.preference)
  if (prefIndex < 0) {
    prefIndex = 0
  }

  colorMode.preference = themeList[(prefIndex + 1) % themeList.length]
}

const menuOpen = ref(false)
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}


</script>
