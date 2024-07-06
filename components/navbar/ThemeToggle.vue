<template>
  <ClientOnly>
    <NavbarItem tag="a" href="#" @click="toggleTheme"><component :is="themeIcon"></component></NavbarItem>
  </ClientOnly>
</template>

<script lang="ts" setup>
import IconSun from "~icons/fa6-regular/sun"
import IconSunSolid from "~icons/fa6-solid/sun"
import IconMoon from "~icons/fa6-solid/moon"

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
</script>
