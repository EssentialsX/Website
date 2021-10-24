<template>
  <div>
    <div class="w-screen py-4 bg-gray-900 text-white">
      <div class="flex items-center container mx-auto h-full px-4">
        <NuxtLink to="/">
          <img class="h-6" src="@/assets/images/logo-navbar.png" />
        </NuxtLink>
        <span class="flex-grow"></span>
        <span class="hidden md:inline flex items-center">
          <NavbarItem tag="NuxtLink" to="/downloads">Downloads</NavbarItem>
          <NavbarItem tag="NuxtLink" to="/docs">Docs</NavbarItem>
          <NavbarItem tag="NuxtLink" to="/misc/get-help">Get help</NavbarItem>
          <NavbarItem tag="NuxtLink" to="/misc/support-us">Support us</NavbarItem>
        </span>
        <a class="md:hidden px-2" @click="toggleMenu">
          <fa-icon :icon="open ? 'caret-up' : 'bars'" />
        </a>
      </div>
    </div>
    <div v-if="open" class="md:hidden flex flex-col p-2 bg-gray-800 text-white">
      <NavbarItem tag="NuxtLink" to="/downloads">Downloads</NavbarItem>
      <NavbarItem tag="NuxtLink" to="/docs">Docs</NavbarItem>
      <NavbarItem tag="NuxtLink" to="/misc/get-help">Get help</NavbarItem>
      <NavbarItem tag="NuxtLink" to="/misc/support-us">Support us</NavbarItem>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      theme: 'light',
      open: false,
    }
  },
  computed: {
    themeIcon() {
      return this.$data.theme === 'light' ? 'weather-sunny' : 'weather-night'
    },
  },
  mounted() {
    // this.$data.theme = this.$theme() TODO theme toggle
  },
  methods: {
    toggleTheme() {
      this.$data.theme = this.$data.theme === 'light' ? 'dark' : 'light'
      // this.$theme(this.$data.theme) TODO theme toggle
    },
    toggleMenu() {
      this.open = !this.open
    },
  },
})
</script>
